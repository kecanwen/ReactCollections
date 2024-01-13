// 任务调度器  优先级
// 根据优先级，优先执行高优先级的任务，然后逐渐执行优先级低的任务。
// 确保紧急的任务能够得到及时处理，同时也能确保低优先级任务不会阻塞高优先级任务
// 马路上救护车优先级高于 普通车辆
export const NoPriority  = 0;
export const immediatePriority = 1;// 最高优先级  例如用户输入事件
export const UserBlockPriority = 2;// 高优先级  例如用户点击操作
export const NormalPriority = 3;// 默认优先级，用于大多数任务，例如渲染更新
export const LowPriority = 4;// 用于处理不紧急的任务  例如后台数据同步
export const IdlePriority = 5;//最低优先级，用于处理闲置时间的任务

switch (priorityLevel) {
    case ImmediatePriority:
    timeout = IMMEDIATE_PRIORITY_TIMEOUT;// -1    紧急任务应该立即执行，不需要等待。
    break;
    case UserBlockingPriority:
    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;// 250ms  值为 250 毫秒。这表示用户阻塞级别的任务应该在用户感知的时间范围内执行，以保证用户界面的响应性
    break;
    case IdlePriority:
    timeout = IDLE_PRIORITY_TIMEOUT; //1073741823  值为 1073741823。这表示空闲级别的任务可以等待很长时间，直到浏览器空闲时才执行。
    break;
    case LowPriority:
    timeout = LOW_PRIORITY_TIMEOUT; //10000  值为 10000。这表示低优先级的任务可以等待一段时间，但不需要太长。
    break;
    case NormalPriority:
    default:
    timeout = NORMAL_PRIORITY_TIMEOUT; //5000 默认情况下，所有未指定优先级的任务都使用普通优先级。超时时间为 NORMAL_PRIORITY_TIMEOUT，其值为 5000。这表示普通优先级的任务需要在一定时间内执行，以保持良好的用户体验。
    break;
    }