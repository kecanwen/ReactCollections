import { useRef } from 'react';
import type { useEffect, useLayoutEffect } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

/**
 * 创建一个更新effect的hook。
 * 
 * @param hook - 一个接受回调函数和依赖数组并返回清理函数的hook
 * @returns 返回一个新的effect hook函数，该函数用于条件性地执行effect
 */
export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect, deps) => {
    const isMounted = useRef(false); // 用于追踪组件是否已挂载。

    // 为支持 react-refresh，注册一个清理函数以在组件卸载时标记为未挂载。
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    // 使用提供的hook执行条件效应。
    hook(() => {
      // 如果组件未挂载
      if (!isMounted.current) {
        isMounted.current = true;
      } else { //如果组件已挂载，则执行effect
        return effect();
      }
    }, deps);
  };

export default createUpdateEffect;