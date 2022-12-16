import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API, APIConfig, APIResponse } from '../../api'
import { AxiosClientResponse } from './axios-client-response'

export class AxiosClient implements API {
  private readonly client: AxiosInstance

  constructor (config?: AxiosRequestConfig) {
    this.client = axios.create(config)
  }

  async request (config: APIConfig): Promise<APIResponse> {
    const data = await this.client.request({
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.payload
    })

    return new AxiosClientResponse(data)
  }
}
