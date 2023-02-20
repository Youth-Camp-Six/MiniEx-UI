const fs = require('fs');

class MkdirPlugin {
  constructor() {
    // mk dir if not exist
    if (!fs.existsSync('docs/views/dev')) {
      fs.mkdirSync('docs/views/dev');
    }
  }
  apply() {}
}

module.exports = MkdirPlugin;
