/*
* 手写useEffect源码实现 
*/
// 假设的全局存储，用于模拟 React 内部的存储机制
// 在实际的 React 实现中，这部分是由 React 的渲染器和调度器管理的
const ReactInternals = {
    currentComponent: null, // 当前正在渲染的组件实例
    effects: new Map(), // 存储副作用函数和它们的依赖
};

function useEffect(callback, dependencies) {
    const { currentComponent, effects } = ReactInternals;

    // 标识当前组件和副作用的唯一ID，简化处理，实际React使用不同的机制
    const effectId = `${currentComponent.id}-effect-${effects.size}`;

    // 检查是否已经有这个副作用的记录
    const hasChanged = dependenciesChanged(effects.get(effectId)?.dependencies, dependencies);
    if (hasChanged) {
        // 如果依赖项改变了，或者是首次渲染，调度副作用函数
        queueMicrotask(() => {
            // 实际的 React 使用不同的调度机制来优化性能
            callback();
        });

        // 更新存储的依赖项
        effects.set(effectId, { callback, dependencies });
    }

    // 在组件卸载时执行清理，这里简化处理，实际 React 有更复杂的机制
    ReactInternals.currentComponent.cleanup = () => {
        effects.delete(effectId);
    };
}

// 检查依赖项数组是否发生变化
function dependenciesChanged(oldDeps, newDeps) {
    if (!oldDeps || !newDeps || oldDeps.length !== newDeps.length) {
        return true;
    }
    for (let i = 0; i < oldDeps.length; i++) {
        if (oldDeps[i] !== newDeps[i]) {
            return true;
        }
    }
    return false;
}