const i11e = require('../dep').i11e;
const createVisitor = i11e.createVisitor;
const Constants = i11e.Constants;

var DebugTraceFactoryVisitor = createVisitor({
  getModel() {
    return "DebugTraceFactoryVisitor";
  },

  enter(port, box, ctx) {
    var factory = port.factory;
    if (factory && box.getTag('debug:trace:factory')) {
      console.log(`|--> FCT: [${factory.getType()}]-[${factory.getId()}]: Enter factory via port [${port.getName()}]`);
    }
  },

  exit(port, err, box, ctx) {
    var factory = port.factory;
    if (factory && box.getTag('debug:trace:factory')) {
      console.log(`|--> FCT: [${factory.getType()}]-[${factory.getId()}]: Exit factory via port [${port.getName()}]`);
    }
  }
});

module.exports = (options) => {
  return DebugTraceFactoryVisitor(options);
}
