'use client'
/* eslint-disable react/no-unescaped-entities */
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import cx from 'clsx'
import { BsCassette } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

const Resume = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
    rootMargin: '-100px',
    triggerOnce: true,
  })

  return (
    <Section id='Resume' icon={<BsCassette />} name='Resume'>
      <div
        ref={ref}
        className={cx(
          'transition delay-300',
          inView ? 'blur-0' : 'blur-md transition delay-300'
        )}
      >
        <div>
          <Text
            size='head'
            className='font-mono  max-[1024px]:!text-3xl max-[768px]:!text-2xl'
          >
            Education &
            <span
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}
              className='ml-5'
            >
              Experience
            </span>
          </Text>
        </div>

        <div className='flex flex-col gap-16 mt-9'>
          <div className='flex flex-col gap-2'>
            <Text
              size='subtitle'
              className='max-w-2xl font-light font-sans !text-pink-500 text-md'
            >
              DECEMBER 2022 - PRESENT
            </Text>
            <Text
              size='title'
              className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'
            >
              FRONT END DEVELOPER
            </Text>
            <Text
              size='normal'
              className='max-w-2xl font-light font-sans text-slate-400 text-md'
            >
              Vtime Tech Consulting Inc.
            </Text>
          </div>

          <div className='flex flex-col gap-2'>
            <Text
              size='subtitle'
              className='max-w-2xl font-light font-sans !text-pink-500 text-md'
            >
              JANUARY 2022 - DECEMBER 2022
            </Text>
            <Text
              size='title'
              className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'
            >
              FRONT END DEVELOPER
            </Text>
            <Text
              size='normal'
              className='max-w-2xl font-light font-sans text-slate-400 text-md'
            >
              Lobster Capital
            </Text>
          </div>

          <div className='flex flex-col gap-2'>
            <Text
              size='subtitle'
              className='max-w-2xl font-light font-sans !text-pink-500 text-md'
            >
              2017 - 2021
            </Text>
            <Text
              size='title'
              className='max-w-2xl font-light font-sans text-slate-100 text-3xl max-[1024px]:!text-2xl max-[768px]:!text-xl'
            >
              Chart Analyst / Strategic Advisor
            </Text>
            <Text
              size='normal'
              className='max-w-2xl font-light font-sans text-slate-400 text-md'
            >
              Seal Capital - London, England
            </Text>
          </div>
          <div className='flex flex-col gap-2'>
            <Text
              size='subtitle'
              className='max-w-2xl font-light font-sans !text-pink-500 text-md'
            >
              2013 - 2018
            </Text>
            <Text
              size='title'
              className='max-w-2xl font-light font-sans text-slate-100 max-[1024px]:!text-2xl max-[768px]:!text-xl'
            >
              Bachelor Degree of Computer Engineering
            </Text>
            <Text
              size='normal'
              className='max-w-2xl font-light font-sans text-slate-400 text-md'
            >
              University of Pangasinan
            </Text>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resume
