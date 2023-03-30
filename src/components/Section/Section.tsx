'use client'
import cx from 'clsx'
import { SectionProps } from './types'
import { Indicator } from '../Indicator'
import { useEffect, useState } from 'react'

const Section = ({
  children,
  className,
  snap = 'start',
  id,
  icon,
  name,
  indicator,
}: SectionProps) => {
  const [size, setSize] = useState(window.innerWidth)

  const checkWindow = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkWindow)

    return () => window.removeEventListener('resize', checkWindow)
  })
  const mobileView = () => {
    return size <= 1450 ? true : false
  }

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
      {(!indicator || !mobileView()) && (
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
