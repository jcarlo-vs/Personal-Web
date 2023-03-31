'use client'
/* eslint-disable react/no-unescaped-entities */
import { Text } from '@/components/Text'
import { BsPerson } from 'react-icons/bs'
import {
  css,
  express,
  html,
  js,
  mongoDB,
  nodejs,
  ps,
  reactjs,
  bootstrap,
  firebase,
  framer,
  git,
  material,
  nextjs,
  styledComponents,
  tailwind,
  ts,
} from '@/assets/icons'
import TechIcon from '@/components/TechIcon/TechIcon'
import { Section } from '@/components/Section'
import { useInView } from 'react-intersection-observer'
import cx from 'clsx'

const Skills = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,

    triggerOnce: true,
  })

  return (
    <div>
      <Section
        id='Skills'
        className='relative'
        icon={<BsPerson />}
        name='Skills'
        size='sm'>
        <div
          ref={ref}
          className={cx(
            'transition duration-500 ease-in',
            inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-lg'
          )}>
          <Text
            size='2xl'
            className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
            <span
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}
              className='mr-3'>
              Technologies
            </span>
            i've been working with
          </Text>
        </div>

        {/* FRONTEND */}
        <section className=' mt-10'>
          <div className='mb-3'>
            <span
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}
              ref={ref}
              className={cx(
                'py-9 tracking-widest transition duration-700 ease-in',
                inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-lg'
              )}>
              FRONT-END
            </span>
          </div>

          {/* TECH ICONS */}

          <div
            ref={ref}
            className={cx(
              'flex gap-3 flex-wrap max-w-md transition duration-700 ease-in',
              inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-sm'
            )}>
            <TechIcon
              image={html}
              title='HTML'
            />
            <TechIcon
              image={css}
              title='CSS'
            />
            <TechIcon
              image={tailwind}
              title='TAILWIND'
            />
            <TechIcon
              image={bootstrap}
              title='BOOTSTRAP'
            />
            <TechIcon
              image={framer}
              title='FRAMER'
            />

            <TechIcon
              image={styledComponents}
              title='STYLED COMPONENTS'
            />

            <TechIcon
              image={js}
              title='JAVASCRIPT'
            />
            <TechIcon
              image={ts}
              title='TYPESCRIPT'
            />
            <TechIcon
              image={reactjs}
              title='REACT JS'
            />
            <TechIcon
              image={nextjs}
              title='NEXT JS'
            />
          </div>
        </section>

        {/* BACKEND */}
        <section className=' mt-10'>
          <div className='mb-3'>
            <span
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}
              ref={ref}
              className={cx(
                'py-9 tracking-widest transition duration-700 delay-200 ease-in',
                inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-lg'
              )}>
              BACK-END
            </span>
          </div>

          {/* TECH ICONS */}

          <div
            ref={ref}
            className={cx(
              'flex gap-3 flex-wrap max-w-md transition duration-700 delay-200 ease-in',
              inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-sm'
            )}>
            <TechIcon
              image={mongoDB}
              title='MONGO DB'
            />
            <TechIcon
              image={express}
              title='EXPRESS JS'
            />
            <TechIcon
              image={nodejs}
              title='NODE JS'
            />
          </div>
        </section>

        {/* OTHER TOOLS */}

        <section className=' mt-4'>
          <div className='mb-3'>
            <span
              style={{
                background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '#9c0a88 1px 20px 100px',
              }}
              ref={ref}
              className={cx(
                'py-9 tracking-widest max-w-md transition duration-700 delay-300 ease-in',
                inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-lg'
              )}>
              OTHER TOOLS
            </span>
          </div>

          {/* TECH ICONS */}

          <div
            ref={ref}
            className={cx(
              'flex gap-3 flex-wrap max-w-md transition duration-700 delay-300 ease-in',
              inView ? '-translate-x-0 blur-0' : '-translate-x-[60%] blur-sm'
            )}>
            <TechIcon
              image={git}
              title='GIT'
            />

            <TechIcon
              image={ps}
              title='PHOTOSHOP'
            />
          </div>
        </section>
      </Section>
    </div>
  )
}

export default Skills
