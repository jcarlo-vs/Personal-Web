import { Inter } from 'next/font/google'
import bg2 from '../assets/images/bg2.webp'
import 'animate.css'

import Introduce from '@/views/Sections/Introduce'
import About from '@/views/Sections/About'
import Resume from '@/views/Sections/Resume'
import Skills from '@/views/Sections/Skills'
import Portfolio from '@/views/Sections/Portfolio'
import Contact from '@/views/Sections/Contact'
import cx from 'clsx'
import Menu from '@/views/Features/MenuBar'
import Profile from '@/views/Features/ProfileCard'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '300'],
})

export default function Home() {
  return (
    <main
      className={cx(
        inter.className,
        'flex items-center justify-evenly bg-no-repeat bg-cover bg-center h-screen'
      )}
      style={{
        backgroundImage: `url(${bg2.src})`,
      }}>
      <section className='bg-black/50 flex items-center w-full justify-evenly h-screen fixed'>
        <div
          className='overflow-y-scroll overflow-x-hidden h-screen w-screen gap-60 flex max-[1450px]:!flex-col max-[1450px]:gap-5 relative'
          style={{ scrollSnapType: 'y proximity' }}>
          <Profile />
          <div className='flex gap-40 flex-col m-auto ml-[33%] max-w-3xl max-[1450px]:ml-0 max-[1450px]:!m-auto '>
            <Introduce />
            <About />
            <Resume />
            <Skills />
            <Portfolio />
            <Contact />
          </div>
          <Menu />
        </div>
      </section>
    </main>
  )
}
