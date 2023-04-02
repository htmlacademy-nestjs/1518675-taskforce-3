export type GetListParams = { offset: number, limit: number }

export interface GetListRepository<E> {
  getList(item: E): Promise<E | null>;
}
