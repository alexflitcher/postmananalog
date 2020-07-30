class Controller {
  constructor() {

  }

  render(filename = 'index') {
    let endPath = `views/${filename}.html`;
    return require('fs').readFile(endPath, (err, data) => {
      return data;
    });
  }
}

module.exports = Controller;
