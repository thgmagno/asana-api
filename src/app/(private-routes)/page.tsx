import { getData, getKeys } from '@/action'
import { SelectDateRange } from '@/components/SelectDateRange'
import { Table } from '@/components/Table'

export default async function Home({
  searchParams,
}: {
  searchParams: { date: string }
}) {
  const { date } = await searchParams
  const [keys, data] = await Promise.all([getKeys(), getData(date)])

  return (
    <main>
      <SelectDateRange options={keys} />
      <Table tasks={data} />
    </main>
  )
}
