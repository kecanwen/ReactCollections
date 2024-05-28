import { useEffect } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';

/**
 * useUnmount 是一个定制的React Hook，用于在组件卸载时执行指定的清理函数。
 * @param fn 清理函数，组件卸载时将执行此函数。
 * 注意：此Hook仅在开发环境中校验传入函数的类型。
 */
const useUnmount = (fn: () => void) => {
  // 在开发环境中检查传入的参数fn是否为函数类型
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  // 使用useLatest Hook保持对最新清理函数的引用
  const fnRef = useLatest(fn);// TODO 为什么保存对最新清理函数的引用

  // 使用React的useEffect Hook，在组件卸载时执行清理函数
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;