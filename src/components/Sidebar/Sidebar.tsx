import Text from '../Text/Text'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import profilePic from '../../assets/informal picture-resized.png'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div className='border-[1.5px] border-slate-700/50 rounded-3xl flex flex-col justify-between items-center gap-6 top-1/2 left-24 px-16 py-12 shadow-lg shadow-gray-600/30 bg-black/20 backdrop-blur-xl h-max'>
      <header className=''>
        <Text size='2xl'>Juan Carlo Senin</Text>
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
      <section className='items-center justify-center flex flex-col gap-3'>
        <div className='relative'>
          <Text
            size='2xl'
            className='font-bold after:content-[`hello world`] after:bg-white after:absolute after:text-white after:h-[2px] after:w-full after:bottom-2 after:left-0 mb-5'>
            Front End Developer
          </Text>
        </div>
        <Text
          size='sm'
          className='font-thin'>
          senin.juancarlo@gmail.com
        </Text>
        <Text
          size='xs'
          className='text-gray-400 text-xs mt-7'>
          © 2023 Juan. All Rights Reserved
        </Text>
      </section>
      {/* ICONS */}
      <footer className='flex gap-8 justify-around mt-6'>
        <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800  group hover:cursor-pointer'>
          <FaLinkedin className='text-gray-500 group-hover:text-sky-600 transition-all' />
        </div>
        <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800 hover:cursor-pointer group'>
          <FaGithub className='text-gray-500 group-hover:text-slate-100 transition-all' />
        </div>
        <div className='flex justify-center items-center border-2 border-gray-500 p-4 rounded-full hover:first:text-violet-600 hover:border-purple-800 hover:cursor-pointer group'>
          <FaTwitter className='text-gray-500 group-hover:text-sky-400 transition-all' />
        </div>
      </footer>
    </div>
  )
}

export default Sidebar
