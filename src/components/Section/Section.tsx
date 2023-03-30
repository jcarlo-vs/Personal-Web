'use client'
import cx from 'clsx'
import { SectionProps } from './types'
import Indicator from '../Indicator/Indicator'

const isMobile = window.innerWidth <= 1250 ? true : false

const Section = ({
  children,
  className,
  snap = 'start',
  id,
  icon,
  name,
  indicator,
}: SectionProps) => {
  return (
    <div
      id={`${id}`}
      style={{
        scrollSnapAlign: `${snap}`,
        scrollSnapStop: 'always',

        // backgroundImage: style ? `url(${bgParticles.src})` : '',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}
      className={cx(
        'px-2 py-7 flex flex-col min-h-screen max-[1024px]:px-5 justify-center',
        className
      )}>
      {(!indicator || isMobile) && (
        <Indicator
          size='xl'
          icon={icon}
          className='text-sm'
          name={name}
        />
      )}
      {children}
    </div>
  )
}

export default Section
