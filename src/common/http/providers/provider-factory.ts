import { API } from '../api/api'
import { AxiosClient } from './axios'
import { ProvidersEnum } from './providers-enum'

export class ProviderFactory {
  static getInstance (providers: ProvidersEnum): API {
    switch (providers) {
      case ProvidersEnum.AXIOS:
        return new AxiosClient()

        // NOTE: Other http request libraries that could be implemented.

        // case ProvidersEnum.FETCH:
        //  return new FetchClient()

        // case ProvidersEnum.SUPERAGENT:
        //  return new SuperAgentClient()

        // case ProvidersEnum.REQUEST:
        //  return new RequestClient()

        // case ProvidersEnum.GOT:
        //  return new GOTClient()

      default:
        throw Error('provider not implemented yet')
    }
  }
}
