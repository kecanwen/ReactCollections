export interface CachedData<TData = any, TParams = any> {
  data: TData;
  params: TParams;
  time: number;
}