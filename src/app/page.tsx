import Image from 'next/image'
import { Inter } from 'next/font/google'
import bg from '../../public/bg.jpg'
import Sidebar from '@/components/Sidebar/Sidebar'
import Menu from '@/views/menu/menu'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '300'],
})

export default function Home() {
  return (
    <main className={inter.className}>
      <div className='h-full'>
        <div className='relative h-screen w-full bg-gradient-to-tr from-zinc-900 to-purple-900'>
          <Image
            src={bg.src}
            alt='bg'
            height={10000}
            width={10000}
            className='h-full w-full absolute object-cover z-0 mix-blend-overlay'
          />
          <Sidebar />
          <Menu />
        </div>
      </div>
    </main>
  )
}
