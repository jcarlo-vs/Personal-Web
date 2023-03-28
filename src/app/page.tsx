import Image from 'next/image'
import { Inter } from 'next/font/google'
import bg from '../assets/bg.jpg'
import Sidebar from '@/components/Sidebar/Sidebar'
import Menu from '@/views/menu/menu'
import PageSection from '@/views/sections/PageSection'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '300'],
})

export default function Home() {
  return (
    <main className={inter.className}>
      {/* <div className='relative h-screen w-full bg-gradient-to-tr from-zinc-900 to-zinc-800 flex justify-evenly border-2 items-center overflow-y-auto'> */}

      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className='flex items-center justify-evenly bg-no-repeat bg-cover bg-center h-screen'>
        <section className='bg-black/80 flex items-center w-full justify-evenly h-screen fixed'>
          <Sidebar />
          <PageSection />
          <Menu />
        </section>
      </div>
      {/* </div> */}
    </main>
  )
}
