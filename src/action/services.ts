'use server'

import { Task } from '@/lib/types'
import { kv } from '@vercel/kv'
import moment from 'moment'

export async function populateDatabase(data: Task[]) {
  const saveTasksByMonth = async (array: Task[]) => {
    const tasksByMonth = array.reduce(
      (acc, obj) => {
        const year = moment(obj.created_at).year()

        if (year >= 2024) {
          const month = moment(obj.created_at).format('YYYY-MM')
          const key = `asana-api-${month}`

          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(obj)
        }

        return acc
      },
      {} as Record<string, Task[]>,
    )

    for (const [key, value] of Object.entries(tasksByMonth)) {
      await kv.set(key, value)
    }
  }

  await saveTasksByMonth(data)
}
