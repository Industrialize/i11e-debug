const i11e = require('../dep').i11e;
const createVisitor = i11e.createVisitor;
const Constants = i11e.Constants;

var DebugTracePipelineVisitor = createVisitor({
  getType() {
    return 'pipeline';
  },

  getModel() {
    return "DebugTracePipelineVisitor";
  },

  enter(pipeline, box, ctx) {
    if (box.getTag(Constants.tags.DEBUG)
      && box.getTag(Constants.tags.DEBUG_TRACE_PIPELINE)) {
      console.log(`|--> PPL: [${pipeline.getModel()}]-[${pipeline.getId()}]: enter pipeline`);
    }
    ctx.startTime = process.hrtime();
  },

  exit(pipeline, err, box, ctx) {
    var diff = process.hrtime(ctx.startTime);
    if (box.getTag(Constants.tags.DEBUG)
      && box.getTag(Constants.tags.DEBUG_TRACE_PIPELINE)) {
      console.log(`|--> PPL: [${pipeline.getModel()}]-[${pipeline.getId()}]: exit pipeline`);
    }
    if (err) {
      throw err;
    }
    if (box.getTag(Constants.tags.DEBUG)
      && box.getTag(Constants.tags.DEBUG_TRACE_PIPELINE)) {
      console.log(`|    >>time elapsed:${diff[0] * 1000 + diff[1] / 1000000} ms<<`);
    }
  }
});

export default DebugTracePipelineVisitor;
