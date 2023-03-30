'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import atomImage from '../../assets/images/atomImage.png'
import { BiHome } from 'react-icons/bi'
import { Text } from '@/components/Text'
import { Section } from '@/components/Section'
const Introduce = () => {
  return (
    <Section
      icon={<BiHome />}
      name='Introduce'
      size='sm'
      indicator
      className='mt-50 max-[1250px]:mt-20 relative animate__animated animate__fadeIn '
      id='Home'>
      <div className='m-w-[800px] flex mb-20 max-[768px]:mb-14'>
        <Text
          size='9xl'
          className='font-thin max-[1024px]:!text-8xl max-[768px]:!text-6xl max-[500px]:!text-5xl'>
          Hi, I'm
        </Text>
        <div
          className='text-9xl ml-8 max-[1024px]:!text-8xl max-[768px]:!text-6xl max-[500px]:!text-5xl'
          style={{
            background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          Juan
        </div>
      </div>

      <div className='[&>*]:mb-8 [&>*]:mt-8 max-[768px]:[&>*]:mt-3'>
        <Text
          className='font-medium font-mono max-[1024px]:!text-3xl max-[768px]:!text-xl '
          size='4xl'>
          I Build Things For The Web.
        </Text>
        <Text
          className='font-thin max-[1024px]:!text-2xl max-[768px]:!text-xl !text-blue-300'
          size='2xl'>
          currently working on both
        </Text>
        <Text
          className='font-medium font-mono max-[1024px]:!text-2xl max-[768px]:!text-xl z-10'
          size='3xl'>
          FRONT-END and BACK-END Development.
        </Text>
      </div>

      <Image
        src={atomImage}
        width={300}
        height={300}
        alt='atom image'
        className='absolute right-0 bottom-20 z-0 max-[768px]:!w-[200px]
          max-[768px]:bottom-52
          '
        style={{ filter: 'drop-shadow(0 0 2rem crimson' }}
      />
    </Section>
  )
}

export default Introduce

// EXTRAS
{
  /* <p
          className='text-9xl text-slate-900 drop-shadow-2xl shadow-white font-thin'
          style={{ textShadow: '#FFF 0 2px 5px' }}>
          Juan
        </p> */
}
{
  /* <div className='text-5xl font-extrabold ml-5'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-900 text-9xl'>
            Juan
          </span>
        </div> */
}
