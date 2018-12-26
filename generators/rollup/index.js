const BaseGenerator = require('../BaseGenerator.js');

module.exports = class extends BaseGenerator {
  constructor (args, opts) {
    super(args, opts);
    this.assets = [
      'rollup.config.js',
      'src/main.js',
    ];
  }

  exec () {
    this.copyAssets();
  }
};
