import { ErrorException } from '.'

export class NotImplementYetErrorException extends ErrorException {
  constructor () {
    super('not_implement_yet')
  }
}
