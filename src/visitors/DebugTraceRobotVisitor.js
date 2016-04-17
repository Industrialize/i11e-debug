const i11e = require('../dep').i11e;
const createVisitor = i11e.createVisitor;
const Constants = i11e.Constants;

var DebugTraceRobotVisitor = createVisitor({
  getModel() {
    return "DebugTraceRobotVisitor";
  },

  enter(robot, box, ctx) {
    if (!box.getTag('debug:trace:robot')) {
      return;
    }

    if (robot.getModel() === 'DebugRobot') {
      return;
    }

    const model = robot.getModel();
    const id = robot.getId();
    console.log(`|--> RBT: [${model}]-[${id}]: enter Robot`);
    ctx.startTime = process.hrtime();
  },

  exit(robot, err, box, ctx) {
    if (!box.getTag('debug:trace:robot')) {
      return;
    }

    if (robot.getModel() === 'DebugRobot') {
      return;
    }

    const model = robot.getModel();
    const id = robot.getId();
    console.log(`|--> RBT: [${model}]-[${id}]: exit Robot`);

    if (ctx.hasOwnProperty('startTime')) {
      var diff = process.hrtime(ctx.startTime);
      console.log(`|    >>time elapsed:${diff[0] * 1000 + diff[1] / 1000000} ms<<`);
    }
  }
});

export default DebugTraceRobotVisitor;
