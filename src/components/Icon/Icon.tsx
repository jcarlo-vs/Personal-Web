'use client'
import cx from 'clsx'
import Tooltip from '../Tooltip/Tooltip'
import { IconProps } from './types'
import Link from 'next/link'
import { useEffect } from 'react'

const Icon = ({
  icon,
  message,
  fontSize,
  tooltip,
  className = '[&>*]:h-5 [&>*]:w-5 [&>*]:text-gray-600 [&>*]:hover:text-purple-600',
}: IconProps) => {
  const viewPort = window.innerWidth
  const isMobile = viewPort <= 1250 ? true : false

  return (
    <div className='relative'>
      <a href={`#${message}`}>
        <div className={cx(className, `hover:cursor-pointer peer`)}>{icon}</div>
      </a>
      {tooltip && !isMobile && (
        <Tooltip
          message={message}
          fontSize={fontSize}
        />
      )}
    </div>
  )
}

export default Icon
