'use client'

import { usePathname, useRouter } from 'next/navigation'

export function SelectDateRange({ options }: { options: string[] }) {
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0')

  const defaultOption = `${currentYear}-${currentMonth}`

  const onChange = (newDate: string) => {
    if (newDate === defaultOption) {
      return replace(pathname)
    } else {
      const params = new URLSearchParams()
      params.set('date', newDate)

      replace(`${pathname}?${params.toString()}`)
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="date">Data:</label>
        <select
          name="date"
          id="date"
          defaultValue={defaultOption}
          onChange={(e) => onChange(e.target.value)}
          className="bg-zinc-800"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
