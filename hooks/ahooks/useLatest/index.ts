import { useRef } from 'react';
/**
 * 使用useRef来保持对最新值的引用。
 * 
 * 该函数接受一个参数value，然后创建一个ref对象，该对象的current属性被初始化为value。
 * 每次调用该函数时，都会返回一个新的ref对象，确保总是引用最新的value。
 * 
 * @param value 需要保持最新引用的值。
 * @returns 返回一个包含最新value的ref对象。
 */
function useLatest<T>(value: T) {
  const ref = useRef(value); // 使用useRef创建一个初始值为value的ref
  ref.current = value; // 更新ref的current属性为最新的value

  return ref; // 返回包含最新value的ref
}

export default useLatest;