import DebugTraceRobotVisitor from './visitors/DebugTraceRobotVisitor';
import DebugTracePipelineVisitor from './visitors/DebugTracePipelineVisitor';
import DebugTraceFactoryVisitor from './visitors/DebugTraceFactoryVisitor';
import DebugRobot from './robots/DebugRobot';

export function extend(i11e) {
  // extend the syntactic sugar
  i11e.registerSugar('debug', DebugRobot, (options) => {
    if (options == null || options == undefined) return 0b1111;

    if (isNaN(options)) return 0b1111;

    if (options == false) return 0b0000;

    return options;
  });

  // extend the visitors
  i11e.registerVisitor('robot', DebugTraceRobotVisitor());
  i11e.registerVisitor('pipeline', DebugTracePipelineVisitor());
  i11e.registerVisitor('factory', DebugTraceFactoryVisitor());
}
