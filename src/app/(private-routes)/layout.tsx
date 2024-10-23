import { synchronize } from '@/action'

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await synchronize()

  return <>{children}</>
}
