import Image from 'next/image'
import { Inter } from 'next/font/google'
import BasicLayout from '@/layouts/basic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' h-screen bg-background'>
      <BasicLayout />
    </main>
  )
}
