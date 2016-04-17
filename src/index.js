import {i11e} from './dep';
import DebugTraceRobotVisitor from './visitors/DebugTraceRobotVisitor';


export function extend(i11e) {
  // extend the syntactic sugar

  // extend the visitors
  i11e.registerVisitor('robot', DebugTraceRobotVisitor());
}
