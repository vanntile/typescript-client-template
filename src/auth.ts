import fetch from 'cross-fetch'
import { headers } from './helpers'
import { EnvVars } from './interfaces'

export const isValidAuth = async ({ url, username, password }: EnvVars): Promise<boolean> => {
  try {
    const response = await fetch(`${url}/auth/isvalidtoken`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username, password }),
    })

    return response.ok
  } catch (error) {
    console.error(error)
    return false
  }
}
