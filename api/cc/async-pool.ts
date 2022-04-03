export type CCAsyncPoolNamespace = {
  new (
    srcObj: object | Array<unknown>,
    limit: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    iterator: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    onEnd: Function,
    target: object
  ): CCAsyncPool;
};

export interface CCAsyncPool {
  size: number;
  finishedSize: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onIterator(iterator: Function, target: object): void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onEnd(endCb: Function, endCbTarget: object): void;
  flow(): void;
}
