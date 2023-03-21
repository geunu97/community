export interface ApiFetcherReturnType<T> {
  data?: T;
  isError: boolean;
  statusCode: number;
}
