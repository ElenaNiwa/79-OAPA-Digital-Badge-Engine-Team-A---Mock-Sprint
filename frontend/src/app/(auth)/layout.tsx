import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OAPA Badge Engine',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#efede8] px-4">
      <div className="w-full max-w-[340px]">{children}</div>
    </div>
  )
}