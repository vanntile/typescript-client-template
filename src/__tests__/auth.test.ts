import { isValidAuth } from '../auth'
import { EnvVars } from '../interfaces'
import { readEnvironment } from '../helpers'

let envVars: EnvVars

describe('environment variables available', () => {
  beforeAll(() => {
    envVars = readEnvironment()
  })

  it('isValidAuth broken url', async () => {
    expect(envVars.username).not.toBeNull()
    expect(envVars.password).not.toBeNull()
    await expect(isValidAuth(envVars)).resolves.toBe(false)
  })
})
