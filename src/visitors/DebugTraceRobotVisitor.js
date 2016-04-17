const i11e = require('../../../i11e-core');
const createVisitor = i11e.createVisitor;
const Constants = i11e.Constants;

var DebugTraceRobotVisitor = createVisitor({
  getModel() {
    return "DebugTraceRobotVisitor";
  },

  enter(robot, box, ctx) {
    const model = robot.getModel();
    const id = robot.getId();
    console.log(`|--> RBT: [${model}]-[${id}]: enter Robot`);
    ctx.startTime = process.hrtime();
  },

  exit(robot, err, box, ctx) {
    var diff = process.hrtime(ctx.startTime);
    const model = robot.getMode();
    const id = robot.getId();
    console.log(`|--> RBT: [${model}]-[${id}]: exit Robot`);

    if (box.getTag(Constants.tags.DEBUG)) {
      console.log(`|    >>time elapsed:${diff[0] * 1000 + diff[1] / 1000000} ms<<`);
    }
  }
});

export default function (options) {
  return new DebugTraceRobotVisitor(options);
}
