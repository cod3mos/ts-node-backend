import { stringify } from 'querystring'
import { keyIncluded } from '../../../helpers'
import { HttpMethodEnum } from '../protocols/http-method-enum'
import { PaginationQueryParams } from './query/pagination-query-params'

export type QueryParams = Record<string, any>

export abstract class APIRequest<QueryParams> {
  protected query: Record<string, any> = {}

  constructor (params?: Record<string, any>) {
    this.query = params ?? {}
  }

  abstract getUrl (): string
  abstract getMethod (): HttpMethodEnum

  hasPayload (): boolean {
    return false
  }

  getQueryString (): string {
    const query = Object.assign({}, this.query)

    if (keyIncluded(query, 'sort')) {
      const direction = (query as PaginationQueryParams).sort!.direction === 'asc' ? '' : '-'
      query.sort = direction + (query as PaginationQueryParams).sort!.field
    }

    return '?' + stringify(query)
  }

  hasQuery (): boolean {
    return Object.keys(this.query).length > 0
  }

  getHeaders (): { [key: string]: string } {
    return {}
  }
}
