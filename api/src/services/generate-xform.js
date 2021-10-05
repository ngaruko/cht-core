/* eslint-disable no-console */

/**
 * XForm generation service
 * @module generate-xform
 */
const childProcess = require('child_process');
const path = require('path');
const MODEL_STYLESHEET = path.join(__dirname, '../../node_modules/enketo-xslt/xsl/openrosa2xmlmodel.xsl');
const XSLTPROC_CMD = 'xsltproc8';

const processErrorHandler = (xsltproc, err, reject) => {
  xsltproc.stdin.end();
  if (err.code === 'EPIPE'                                                    // Node v10,v12,v14
      || (err.code === 'ENOENT' && err.syscall === `spawn ${XSLTPROC_CMD}`)   // Node v8,v16+
  ) {
    const errMsg = `Unable to continue execution, check that '${XSLTPROC_CMD}' command is available.`;
    console.log(errMsg);
    return reject(new Error(errMsg));
  }
  console.log(err);
  return reject(new Error(`Unknown Error: An error occurred when executing '${XSLTPROC_CMD}' command`));
};

const transform = (formXml, stylesheet) => {
  return new Promise((resolve, reject) => {
    const xsltproc = childProcess.spawn(XSLTPROC_CMD, [ stylesheet, '-' ]);
    let stdout = '';
    let stderr = '';
    xsltproc.stdout.on('data', data => stdout += data);
    xsltproc.stderr.on('data', data => stderr += data);
    xsltproc.stdin.setEncoding('utf-8');
    xsltproc.stdin.on('error', err => {
      // Errors related with spawned processes and stdin are handled here on Node v10
      return processErrorHandler(xsltproc, err, reject);
    });
    try {
      xsltproc.stdin.write(formXml);
      xsltproc.stdin.end();
    } catch (err) {
      // Errors related with spawned processes and stdin are handled here on Node v12
      return processErrorHandler(xsltproc, err, reject);
    }
    xsltproc.on('close', (code, signal) => {
      if (code !== 0 || signal || stderr.length) {
        let errorMsg = `Error transforming xml. xsltproc returned code "${code}", and signal "${signal}"`;
        if (stderr.length) {
          errorMsg += '. xsltproc stderr output:\n' + stderr;
        }
        return reject(new Error(errorMsg));
      }
      if (!stdout) {
        return reject(new Error(`Error transforming xml. xsltproc returned no error but no output.`));
      }
      resolve(stdout);
    });
    xsltproc.on('error', err => {
      // Errors related with spawned processes are handled here on Node v8,v14,v16+
      return processErrorHandler(xsltproc, err, reject);
    });
  });
};


const formXml = `<?xml version="1.0" encoding="UTF-8"?>
<note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
  </note>`;


transform(formXml, MODEL_STYLESHEET).then(form => {
  console.log(form);
});


