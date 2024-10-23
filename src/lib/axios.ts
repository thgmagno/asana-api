import { Axios } from 'axios'
import { env } from 'root/env'

export const axios = new Axios({
  baseURL: env.API_URL,
  headers: {
    Authorization: `Bearer ${env.API_TOKEN}`,
  },
})
