'use client'
/* eslint-disable react/no-unescaped-entities */
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import cx from 'clsx'
import { BsPerson } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,

    triggerOnce: true,
  })

  return (
    <Section
      id='About'
      icon={<BsPerson />}
      name='About'
      size='sm'>
      <div
        ref={ref}
        className={cx(
          'transition delay-300',
          inView ? 'blur-0' : 'blur-md transition delay-300'
        )}>
        <div>
          <Text
            size='xl'
            className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
            Every great developer begins with
          </Text>
          <Text
            size='2xl'
            className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
            an even{' '}
            <span
              className='max-[768px]:!text-3xl'
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}>
              Better Story
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

        <div className='mt-8 flex flex-col gap-5'>
          <Text
            size='2xl'
            className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
            Technical
            <span
              className='ml-5'
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}>
              Vision
            </span>
          </Text>

          <Text
            size='md'
            className='max-w-2xl font-thin font-sans text-slate-300'>
            My technical vision is to leverage the latest advancements in
            software engineering and technology to develop robust, scalable, and
            user-friendly applications that meet the evolving needs of
            businesses and society as a whole.
          </Text>

          {/* LEARN BUILD REPEAT */}
          <div className='flex items-center justify-start mt-10 gap-5'>
            <Text
              size='2xl'
              className='font-mono'>
              <span
                className='text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'
                style={{
                  background: 'linear-gradient(90deg,#fc00ff,#00dbde)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '#9c0a88 1px 20px 100px',
                }}>
                LEARN.
              </span>
            </Text>
            <Text
              size='2xl'
              className='font-mono'>
              <span
                className='text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'
                style={{
                  background: 'linear-gradient(90deg,#fc00ff,#00dbde)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '#9c0a88 1px 20px 100px',
                }}>
                BUILD.
              </span>
            </Text>
            <Text
              size='2xl'
              className='font-mono'>
              <span
                className='text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'
                style={{
                  background: 'linear-gradient(90deg,#fc00ff,#00dbde)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '#9c0a88 1px 20px 100px',
                }}>
                REPEAT.
              </span>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
