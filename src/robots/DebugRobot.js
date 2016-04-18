const i11e = require('../dep').i11e;

var DebugRobot = i11e.createRobot({
  initRobot() {
    this.robot = (this.options & 0b0001) > 0 ? true : false; // 1
    this.pipeline = (this.options & 0b0010) > 0 ? true : false; // 2
    this.factory = (this.options & 0b0100) > 0 ? true : false;   // 4
    this.transport = (this.options & 0b1000) > 0 ? true : false;  // 8
  },

  getModel() {
    return 'DebugRobot';
  },

  process(box, done) {
    box
      .addTag('debug:trace:robot', this.robot)
      .addTag('debug:trace:pipeline', this.pipeline)
      .addTag('debug:trace:factory', this.factory)
      .addTag('debug:trace:transport', this.transport);

    done(null, box);
  }
});

export default DebugRobot;
