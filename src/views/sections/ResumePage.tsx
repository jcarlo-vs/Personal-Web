/* eslint-disable react/no-unescaped-entities */
import Indicator from '@/components/Indicator/Indicator'
import { Text } from '@/components/Text'
import Content from '@/layout/Content'
import { BsCassette } from 'react-icons/bs'

const ResumePage = () => {
  return (
    <Content>
      <Indicator
        size='xl'
        icon={<BsCassette />}
        className='text-sm'>
        Resume
      </Indicator>

      <div>
        <Text
          size='2xl'
          className='font-mono text-4xl'>
          Education &
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='ml-5'>
            Experience
          </span>
        </Text>
      </div>

      <div className='flex flex-col gap-10 mt-9'>
        <Text
          size='md'
          className='max-w-2xl font-sans font-thin text-slate-300'>
          I've been always fascinated into technologies and I enjoy exploring
          things around the internet. I love building Fully functional Web
          Applications and discovering new tools for me to learn new challenge
          to take in.
        </Text>
        <Text
          size='md'
          className='max-w-2xl font-thin font-sans text-slate-300'>
          I always seek challenge. Because there's always a room for
          improvements , as technology evolves, you also need to be involved.
        </Text>
      </div>
    </Content>
  )
}

export default ResumePage
