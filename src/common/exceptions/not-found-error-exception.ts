import { ErrorException } from './error-exception'

export class NotFoundErrorException extends ErrorException {
  constructor (name: string) {
    super(`${name}_not_found`)
  }
}
