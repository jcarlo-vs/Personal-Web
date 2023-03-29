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
          className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
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

      <div className='flex flex-col gap-16 mt-9'>
        <div className='flex flex-col gap-2'>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-pink-500 text-md'>
            DECEMBER 2022 - PRESENT
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'>
            FRONT END DEVELOPER
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-400 text-md'>
            Vtime Tech Consulting Inc.
          </Text>
        </div>

        <div className='flex flex-col gap-2'>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-pink-500 text-md'>
            MARCH 2022 - DECEMBER 2022
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'>
            FREELANCE WEB DEVELOPER
          </Text>
        </div>

        <div className='flex flex-col gap-2'>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-pink-500 text-md'>
            2017 - 2020
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'>
            Chart Analyst / Strategic Advisor
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-400 text-md'>
            Seal Capital - London, England
          </Text>
        </div>
        <div className='flex flex-col gap-2'>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-pink-500 text-md'>
            2013 - 2018
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'>
            Bachelor Degree of Computer Engineering
          </Text>
          <Text
            size='md'
            className='max-w-2xl font-light font-sans text-slate-400 text-md'>
            University of Pangasinan
          </Text>
        </div>
      </div>
    </Content>
  )
}

export default ResumePage
