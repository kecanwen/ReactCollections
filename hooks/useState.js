/*
* 手写useState源码实现 
*/
let state;// 用于存储状态值
let setters = [];//状态更新函数
function useState(initialValue) {
    state = state || initialValue;

    const currentIndex = setters.length;

    setters[currentIndex] = setters[currentIndex] || function(newState){
        state = newState;
        render();//更新组件
    }

    return [state, setters[currentIndex]]
}