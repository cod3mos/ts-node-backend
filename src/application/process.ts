import { Application } from './application'

export interface Process {
  execute: (app: Application) => Promise<void>
}
