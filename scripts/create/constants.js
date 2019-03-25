const { SCRIPT_PATH, PACKAGE_PATH } = require('../constants');

// Command related
module.exports.STUB_PATH = `${SCRIPT_PATH}/create/stubs`;

// Generated files realated
module.exports.generatePaths = (PACKAGE_NAME) => ({
  MAIN_PATH: `${PACKAGE_PATH}/${PACKAGE_NAME}`,
  SRC_PATH: `${PACKAGE_PATH}/${PACKAGE_NAME}/src`,
});
