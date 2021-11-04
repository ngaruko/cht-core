const path = require('path');

const { UNIT_TEST_ENV, COUCH_URL } = process.env;

if (UNIT_TEST_ENV) {
  module.exports = {
    serverUrl: '',
    db: '',
    ddoc: '',
    couchUrl: '',
    port: '',
    host: '',
    protocol: '',
  };
} else if (COUCH_URL) {
  module.exports = require('@medic/environment');
}

let deployInfo;
module.exports.setDeployInfo = newDeployInfo => {
  deployInfo = newDeployInfo;
};

module.exports.getDeployInfo = () => deployInfo;
module.exports.getBuildPath = () => path.join(__dirname, '..', 'build');
module.exports.getStaticPath = () => path.join(module.exports.getBuildPath(), 'static');
module.exports.getDefaultDocsPath = () => path.join(module.exports.getBuildPath(), 'default-docs');
module.exports.getResourcesPath = () => path.join(__dirname, '..', 'resources');
module.exports.isTesting = module.exports.db === 'medic-test';
