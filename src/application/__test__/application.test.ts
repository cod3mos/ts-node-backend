import { Application } from '../..'
import { BootstrapTest } from './__mocks__/bootstrap-test'
import { ProcessTest } from './__mocks__/process-test'

describe('Application', () => {
  it('simple run without errors', async () => {
    await Application.create([]).run()
  })

  it('run with bootstrap without errors', async () => {
    await Application.create([new BootstrapTest()]).run()
  })

  it('run with process without errors', async () => {
    await Application.create([]).addProcess(new ProcessTest()).run()
  })

  it('run with process and bootstrap without errors', async () => {
    await Application.create([new BootstrapTest()]).addProcess(new ProcessTest()).run()
  })
})
