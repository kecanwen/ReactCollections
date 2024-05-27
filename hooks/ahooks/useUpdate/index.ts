import { useCallback, useState } from 'react';

const useUpdate = () => {
  const [, setState] = useState({});
  // 通过设置一个全新的状态，促使 function 组件更新
  return useCallback(() => setState({}), []);// TODO 为什么要用 useCallback 包一层呢 ? 
};

export default useUpdate;