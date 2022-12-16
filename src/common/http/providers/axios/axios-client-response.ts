import { AxiosResponse } from 'axios'
import { APIResponse } from '../../api'

export class AxiosClientResponse implements APIResponse {
  constructor (private readonly response: AxiosResponse) {}

  getStatusCode (): number {
    return this.response.status
  }

  getData (): any {
    return this.response.data
  }
}
