import { EnvVars } from './interfaces'

export const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json',
}

const toNumber = (n: string | number, defaultValue = -1) => (isNaN(Number(n)) ? defaultValue : Number(n))

export const readEnvironment = (): EnvVars | null => {
  const options: EnvVars = {
    username: process.env.USER,
    password: process.env.PASSWORD,
    url: process.env.URL,
    port: toNumber(process.env.PORT, 80),
    debug: process.env.DEBUG == 'true',
  }

  return options
}
