'use server'

import { axios } from '@/lib/axios'
import { Task } from '@/lib/types'
import { kv } from '@vercel/kv'
import { env } from 'root/env'
import { populateDatabase } from './services'

export async function synchronize() {
  const isSync = await kv.get('asana-api-sync')

  if (!isSync) {
    const response = await axios.get(env.API_URL)
    const { data }: { data: Task[] } = JSON.parse(response.data)

    const twelveHours = 12 * 60 * 60

    await Promise.all([
      kv.set('asana-api-sync', { ttl: twelveHours }),
      populateDatabase(data),
    ])
  }

  return null
}

export async function getData(key?: string) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0')
  const defaultKey = `${currentYear}-${currentMonth}`

  const data: Task[] | null = await kv.get(`asana-api-${key ?? defaultKey}`)
  return data
}

export async function getKeys() {
  const keys = await kv
    .keys('*')
    .then((keys) =>
      keys
        .filter((key) => key !== 'asana-api-sync')
        .map((key) => key.slice(10)),
    )

  return keys
}
