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