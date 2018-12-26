const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'public/index.html',
    ];
  }

  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project title',
      },
    ]);
  }


  exec () {
    this.copyAssets();
  }
};
