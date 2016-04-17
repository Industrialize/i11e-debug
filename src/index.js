import {i11e} from './dep';
import DebugTraceRobotVisitor from './visitors/DebugTraceRobotVisitor';
import DebugTracePipelineVisitor from './visitors/DebugTracePipelineVisitor';
import DebugRobot from './robots/DebugRobot';

export function extend(i11e) {
  // extend the syntactic sugar
  i11e.registerSugar('debug', DebugRobot, (options) => {
    if (!options) return 0b1111;

    if (options == true) return 0b1111;

    if (options == false) return 0b0000;

    if (isNaN(options)) return 0b1111;

    return options;
  });

  // extend the visitors
  i11e.registerVisitor('robot', DebugTraceRobotVisitor());
  i11e.registerVisitor('pipeline', DebugTracePipelineVisitor());
}
