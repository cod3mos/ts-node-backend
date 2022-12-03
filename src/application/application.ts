import { Bootstrap } from './bootstrap'
import { Process } from './process'

export class Application {
  private readonly processes: Process[] = []

  private constructor (bootstraps: Bootstrap[]) {
    for (const bootstrap of bootstraps) {
      void bootstrap.handler()
    }
  }

  static create (bootstraps: Bootstrap[]): Application {
    return new Application(bootstraps)
  }

  addProcess (process: Process): Application {
    this.processes.push(process)
    return this
  }

  async run (): Promise<void> {
    for (const process of this.processes) {
      void process.execute(this)
    }
  }
}
