/* eslint-disable no-console */

/**
 * XForm generation service
 * @module generate-xform
 */
const childProcess = require('child_process');
const path = require('path');
//const logger = require('../logger');
//const db = require('../db');
//const formsService = require('./forms');

const MODEL_STYLESHEET = path.join(__dirname, '../../node_modules/enketo-xslt/xsl/openrosa2xmlmodel.xsl');
const XSLTPROC_CMD = 'xsltproc8';

const transform = (formXml, stylesheet) => {
  return new Promise((resolve, reject) => {
    const xsltproc = childProcess.spawn(XSLTPROC_CMD, [ stylesheet, '-' ]);
    let stdout = '';
    let stderr = '';
    xsltproc.stdout.on('data', data => stdout += data);
    xsltproc.stderr.on('data', data => stderr += data);
    xsltproc.stdin.setEncoding('utf-8');
    try {
      xsltproc.stdin.write(formXml);
    } catch (err) {
      if (err.code === 'EPIPE') {
        const errMsg = `Unable to continue execution, check that '${XSLTPROC_CMD}' command is available.`;
        console.log(errMsg);
        return reject(new Error(errMsg));
      }
      //logger.error(err);
      return reject(new Error(`Unknown Error: An error occurred when executing '${XSLTPROC_CMD}' command`));
    } finally {
      xsltproc.stdin.end();
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
      console.log(err);
      return reject(new Error('Child process errored attempting to transform xml'));
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


