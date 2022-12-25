import { ErrorException } from './error-exception'

export class AlreadyExistsException extends ErrorException {
  constructor (name: string) {
    super(`${name}_already_exists`)
  }
}
