export interface Tokens {
  token: string
  refreshToken: string
}

export interface EnvVars {
  username: string
  password: string
  url: string
  port?: number
  debug?: boolean
}
