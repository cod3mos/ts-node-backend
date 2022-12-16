import { APIConfig } from './api-config'
import { APIResponse } from './api-response'

export interface API {
  request: (config: APIConfig) => Promise<APIResponse>
}
