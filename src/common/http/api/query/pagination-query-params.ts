import { SortPaginationQueryParams } from './sort-pagination-query-params'

export interface PaginationQueryParams {
  page?: number
  limit?: number
  sort?: SortPaginationQueryParams
  q?: string
}
