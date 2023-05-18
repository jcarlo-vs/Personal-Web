'use client'

import { Text } from '@/components/Text'
import { BsBriefcase } from 'react-icons/bs'
import notelify from '../../assets/images/notelifyv1.png'
import cryptometer from '../../assets/images/cryptometerv1.png'
import picabook from '../../assets/images/picabookv1.png'
import { Project } from '@/components/Project'
import { Section } from '@/components/Section'
import { useInView } from 'react-intersection-observer'
import cx from 'clsx'
const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
    rootMargin: '-100px',
    triggerOnce: true,
  })

  return (
    <Section snap='start' id='Projects' icon={<BsBriefcase />} name='PORTFOLIO'>
      <div>
        <Text
          size='head'
          className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'
        >
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            ref={ref}
            className={cx(
              'transition delay-300',
              inView ? 'blur-0' : 'blur-md transition delay-300'
            )}
          >
            Projects
          </span>
        </Text>
      </div>

      {/* PROJECT AREA */}
      <div
        ref={ref}
        className={cx(
          'transition duration-700 ease-in border-white mt-14 flex flex-col gap-32',
          inView ? 'blur-0' : 'blur-md transition delay-300'
        )}
      >
        <article>
          <Project
            githublink='https://github.com/jcarlo-vs/NOTELIFY-APP'
            demolink='https://notelify-app.vercel.app/landing'
            image={notelify}
            technologyUsed={['MONGO DB', 'EXPRESS JS', 'REACT JS']}
            projectTitle='NOTELIFY APP'
            description='A note and save fullstack-app which will let you store your own notes.
          Secure it. Input your plans. Save it. Get back on it. Your account,
          your own data.'
          />
        </article>
        <article ref={ref} className={cx()}>
          <Project
            demolink='https://crypto-meter.vercel.app/'
            githublink='https://github.com/jcarlo-vs/CRYPTO-METER'
            invert
            image={cryptometer}
            technologyUsed={['REACT JS', 'REDUX']}
            projectTitle='CRYPTO METER'
            description={`An all-in-one Crypto Library which users can browse most trusted Exchanges, thousands of Cryptocurrencies, Crypto News, Crypto Beginner's Guide and Crypto calculator.`}
          />
        </article>
        <article ref={ref} className={cx()}>
          <Project
            demolink='https://picabook-app.vercel.app/login'
            githublink='https://github.com/jcarlo-vs/picabook-app'
            image={picabook}
            technologyUsed={['MONGO DB', 'EXPRESS JS', 'REACT JS']}
            projectTitle='PICABOOK'
            description={`A Social Media app, which let you share your own photos to public, give caption and view other's profile.`}
          />
        </article>
      </div>
    </Section>
  )
}

export default Portfolio
