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

    if (!this.silent) {
      this.$info('\n@components.js CLI - by Olavo Amorim Santos');
      this.$info('Creating new package\n');
    }

    if (!this.silent) {
      this.$info(`@components.js/${this.name} (${MAIN_PATH})`);
    }

    this.generateFile(SRC_PATH, 'index.ts', DATA);
    this.generateFile(SRC_PATH, 'index.test.ts', DATA);
    this.generateFile(MAIN_PATH, 'jest.config.json', DATA);
    this.generateFile(MAIN_PATH, 'package.json', DATA);
    this.generateFile(MAIN_PATH, 'README.md', DATA);
    this.generateFile(MAIN_PATH, 'tsconfig.json', DATA);

    if (!this.silent) this.$info('\nUpdating package.json...\n');
    const packageJson = JSON.parse(this.loadContentsFrom('package.json'));
    if (packageJson.scripts) {
      packageJson.scripts[this.name] = `cd ./packages/${this.name}; yarn`;
    } else {
      packageJson.scripts = { [this.name]: `cd ./packages/${this.name}; yarn` };
    }

    createFile('package.json', JSON.stringify(packageJson, null, 2), {});

    if (this.install) {
      if (!this.silent) this.$info('\nInstalling dependencies...\n');
      this.native(`(cd ${MAIN_PATH} ; yarn)`, () => {
        if (!this.silent) {
          this.$info('All done! Now go build something awesome\n');
        }
      });
    }
  }
}

CreateCommand.COMMAND = 'create';
CreateCommand.DESCRIPTION = 'Create a new package';

CreateCommand.OPTIONS = [
  { name: 'name', description: 'The package\'s name' },
];

CreateCommand.FLAGS = [
  { name: 'install', alias: 'i', description: 'Automatically install dependencies', default: true },
];

module.exports = CreateCommand;
