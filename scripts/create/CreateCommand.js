const { BaseCommand } = require('node-assistant');

const { STUB_PATH, generatePaths } = require('./constants');

class CreateCommand extends BaseCommand {
  generateFile(path, name, data) {
    if (!this.silent) this.$info(`• Creating ${name} file...`);
    this.createFile(`${path}/${name}`, `${STUB_PATH}/${name}.stub`, data);

    if (!this.silent) {
      this.$success(`✓ Successfully created ${name} at '${path}/${name}'`);
    }
  }

  run() {
    const { MAIN_PATH, SRC_PATH } = generatePaths(this.name);
    const DATA = {
      NAME: this.name,
    };

    this.generateFile(SRC_PATH, 'index.ts', DATA);
    this.generateFile(SRC_PATH, 'index.test.ts', DATA);
    this.generateFile(MAIN_PATH, 'jest.config.json', DATA);
    this.generateFile(MAIN_PATH, 'package.json', DATA);
    this.generateFile(MAIN_PATH, 'README.md', DATA);
    this.generateFile(MAIN_PATH, 'tsconfig.json', DATA);
  }
}

CreateCommand.COMMAND = 'create';
CreateCommand.DESCRIPTION = 'Create a new package';

CreateCommand.OPTIONS = [
  { name: 'name', description: 'The package\'s name' },
];

CreateCommand.FLAGS = [
  // { name: 'FLAG NAME', alias: 'FLAG ALIAS', description: 'FLAG DESCRIPTION', default: 'FLAG DEFAULT VALUE' },
];

module.exports = CreateCommand;
