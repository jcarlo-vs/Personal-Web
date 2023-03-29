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
            className='py-9 tracking-widest text-white font-thin'>
            FRONT-END
          </span>
        </div>

        {/* TECH ICONS */}

        <div className='flex gap-3 flex-wrap max-w-md'>
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
          {/* <TechIcon
            image={material}
            title='MATERIAL UI'
          /> */}
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

      <section className=' mt-4'>
        <div className='mb-3'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='py-9 tracking-widest'>
            OTHER TOOLS
          </span>
        </div>

        {/* TECH ICONS */}

        <div className='flex gap-3'>
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
    </Content>
  )
}

export default SkillsPage
