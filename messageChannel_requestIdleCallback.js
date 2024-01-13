/* messageChannel 模拟 requestIdleCallback
为什么不用requestIdleCallback?
1、存在兼容性的问题
2、不可靠的调度 ：requestIdleCallback的调度时间是由浏览器决定的，会受多重因素影响，如当前系统的负载，设备性能。这种不确定性会导致应用程序行为不一致性，难以控制任务执行顺序
3、性能问题：如果任务过多，浏览器空闲时间少，requestIdleCallback 可能无法及时执行任务，导致任务积压和延迟。
*/

const channel = new MessageChannel();// 建立一个messageChannel对象 包含两个端口 port1 和 port2
channel.port1.onmessage = performWorkUntilDeadline;// 将performWorkUntilDeadline设置为port1的事件处理程序 当port2发送消息到port1的时候 performWorkUntilDeadline被调用

function performWorkUntilDeadline() {
  if (scheduleHostCallback) {
    // 先获取开始执行任务的时间
    //表示时间片的开始
    startTime = getCurrentTime();
    // 是否有更多的工作要做
    let hasMoreWork = true;
    try {
      //执行 flushWork ，并判断有没有返回值
      hasMoreWork = scheduleHostCallback(startTime);
    } finally {
      //执行完以后如果为true,说明还有更多工作要做
      if (hasMoreWork) {
        //继续执行
        channel.port2.postMessage(null);// 向 port2 发送一条空消息。这个操作会触发 port1 的 onmessage 事件，从而调用之前指定的 callback 函数。
      } else {
        scheduleHostCallback = null;
      }
    }

  }
}




