import Text from '../Text/Text'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import profilePic from '../../assets/informal picture-resized.png'
import Image from 'next/image'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className='border-[1.5px] border-slate-700/50 rounded-3xl flex flex-col justify-between items-center gap-6 top-1/2 left-[6%] px-14 py-12 shadow-lg shadow-gray-700/30 bg-black/20 backdrop-blur-xl fixed -translate-y-1/2 max-[1250px]:static max-[1250px]:-translate-y-0 max-[1250px]:m-w-[600px] max-[1250px]:min-w-[500px] max-[1250px]:m-auto max-[1250px]:mt-28 max-[768px]:!py-5 max-[768px]:min-w-[400px] max-[425px]:min-w-[300px]'>
      <header className=''>
        <Text
          size='2xl'
          className='font-thin font-sans text-2xl uppercase tracking-wider max-[768px]:!text-xl'>
          Juan Carlo Senin
        </Text>
      </header>
      {/* IMAGE */}
      <div className=''>
        <Image
          src={profilePic}
          alt='profilepic'
          height={100}
          width={200}
        />
      </div>

      {/* INFO */}
      <section className='items-center justify-center flex flex-col gap-3 max-[768px]:gap-1'>
        <div className='relative'>
          <Text
            size='2xl'
            className='font-bold after:content-[`hello world`] after:bg-white after:absolute after:text-white after:h-[2px] after:w-full after:bottom-2 after:left-0 mb-5 max-[768px]:!text-md'>
            Web Developer
          </Text>
        </div>
        <Text
          size='sm'
          className='font-thin max-[768px]:text-sm'>
          senin.juancarlo@gmail.com
        </Text>
        <Text
          size='xs'
          className='text-gray-400 text-xs mt-7 max-[768px]:!text-[10px]'>
          © 2023 Juan. All Rights Reserved
        </Text>
      </section>
      {/* ICONS */}
      <footer className='flex gap-8 justify-around mt-6 max-[768px]:mt-0'>
        <Link
          href={'https://www.linkedin.com/in/jcarlo-senin/'}
          target='_blank'>
          <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800  group hover:cursor-pointer'>
            <FaLinkedin
              className='text-gray-500 group-hover:text-sky-600 transition-all'
              href='www.facebook.com'
            />
          </div>
        </Link>

        <Link
          href={'https://github.com/jcarlo-vs'}
          target='_blank'>
          <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800 hover:cursor-pointer group'>
            <FaGithub className='text-gray-500 group-hover:text-slate-100 transition-all' />
          </div>
        </Link>

        <Link
          href={'https://twitter.com/Anon_rekt'}
          target='_blank'>
          <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800 hover:cursor-pointer group'>
            <FaTwitter className='text-gray-500 group-hover:text-sky-400 transition-all' />
          </div>
        </Link>
      </footer>
    </div>
  )
}

export default Sidebar
