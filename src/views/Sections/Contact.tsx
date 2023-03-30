'use client'
/* eslint-disable react/no-unescaped-entities */
import { Input } from '@/components/Input'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import TextArea from '@/components/TextArea/TextArea'
import { FormEvent } from 'react'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Section
      className='mb-32'
      id='Contact'
      size='sm'
      icon={<BsEnvelope />}
      name='Contact'>
      <div className='mb-8'>
        <Text
          size='2xl'
          className='font-mono text-4xl max-[1024px]:!text-3xl'>
          Let's Work
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='ml-5'>
            Together!
          </span>
        </Text>
      </div>

      <Text
        size='xl'
        className='text-2xl font-thin font-sans mb-5 max-[1024px]:text-xl'>
        senin.juancarlo@gmail.com
      </Text>
      {/* CONTACT SECTION */}
      <div className=''>
        <form
          className='flex flex-col gap-5'
          onSubmit={onSubmit}>
          <Input
            label='FULL NAME'
            placeholder='Your Full Name'
          />
          <Input
            label='EMAIL'
            placeholder='Your Email'
          />

          <TextArea
            label='MESSAGE'
            placeholder='Write your message here ...'
            className='resize-none w-[500px] h-[100px] max-[768px]:!w-[350px] max-[425px]:!w-[300px]'
          />
          <button
            type='submit'
            className='max-w-sm border border-slate-500/50 font-thin text-md rounded-2xl p-2 hover:cursor-pointer hover:-translate-y-2 transition-all tracking-wider'
            style={{
              background: 'linear-gradient(90deg,#00dade80,#fb00ff7e)',
            }}>
            SEND YOUR MESSAGE
          </button>
        </form>
      </div>
    </Section>
  )
}

export default Contact

// WebkitBackgroundClip: 'text',
// WebkitTextFillColor: 'transparent',
// textShadow: '#9c0a88 1px 20px 100px',
