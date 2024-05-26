import type { Plugin } from '../types'
const useAutoRunPlugin = Plugin<any, any[]> = (
  fetchInstance,
  { manual, ready = true, defaultParams = [], refreshDeps = [], refreshDepsAction },
) => {

};