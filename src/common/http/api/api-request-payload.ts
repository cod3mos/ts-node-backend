import { APIRequest } from './api-request'

export abstract class APIRequestPayload extends APIRequest<string> {
  abstract getPayload (): any

  hasPayload (): boolean {
    return true
  }
}
