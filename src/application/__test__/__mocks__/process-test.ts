import { Application, Process } from '../../'

export class ProcessTest implements Process {
  async execute (app: Application): Promise<void> {
    // true
  }
}
