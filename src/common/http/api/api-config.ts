import { HttpMethodEnum } from '../protocols/http-method-enum'

export interface APIConfig {
  method: HttpMethodEnum
  url: string
  payload?: any
  headers?: Record<string, string>
}
