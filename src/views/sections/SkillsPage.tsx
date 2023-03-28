/* eslint-disable react/no-unescaped-entities */
import Indicator from '@/components/Indicator/Indicator'
import { Text } from '@/components/Text'
import Content from '@/layout/Content'
import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'
import {
  css,
  express,
  html,
  js,
  mongoDB,
  nodejs,
  personalLogo,
  ps,
  reactjs,
} from '@/assets/icons'
import TechIcon from '@/components/TechIcon/TechIcon'

const SkillsPage = () => {
  return (
    <Content>
      <Indicator
        size='xl'
        icon={<BsPerson />}
        className='text-sm'>
        Skills
      </Indicator>

      <div>
        <Text
          size='2xl'
          className='font-mono text-4xl'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='mr-5'>
            Technologies
          </span>
          i've been working with
        </Text>
      </div>

      {/* FRONTEND */}
      <section className='border mt-10'>
        <div className='mb-3'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='py-9 tracking-widest'>
            FRONT-END
          </span>
        </div>

        {/* TECH ICONS */}

        <div className='flex gap-3'>
          <TechIcon
            image={html}
            title='HTML'
          />
          <TechIcon
            image={css}
            title='CSS'
          />
          <TechIcon
            image={js}
            title='JAVASCRIPT'
          />
          <TechIcon
            image={reactjs}
            title='REACT JS'
          />
        </div>
      </section>

      {/* BACKEND */}
      <section className='border mt-10'>
        <div className='mb-3'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='py-9 tracking-widest'>
            BACK-END
          </span>
        </div>

        {/* TECH ICONS */}

        <div className='flex gap-3'>
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

      <section className='border mt-4'>
        <div className='mb-3'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='py-9 tracking-widest'>
            DESIGN
          </span>
        </div>

        {/* TECH ICONS */}

        <div className='flex gap-3'>
          <TechIcon
            image={ps}
            title='PHOTOSHOP'
          />
        </div>
      </section>
    </Content>
  )
}

export default SkillsPage
