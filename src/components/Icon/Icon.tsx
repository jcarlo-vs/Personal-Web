'use client'
import cx from 'clsx'
import Tooltip from '../Tooltip/Tooltip'
import { IconProps } from './types'
import Link from 'next/link'

const Icon = ({
  icon,
  message,
  // fontSize,
  // tooltip,
  className = '[&>*]:h-5 [&>*]:w-5 [&>*]:text-gray-600 [&>*]:hover:text-purple-600',
}: IconProps) => {
  return (
    <div className='relative flex-1 flex justify-center hover:cursor-pointer'>
      <a href={`#${message}`} className='hover:cursor-pointer'>
        <div className={cx(className, `hover:cursor-pointer peer`)}>{icon}</div>
      </a>
      {/* TOOLTIP TEMPORARILY DISABLED */}
      {/* <Tooltip
        message={message}
        fontSize={fontSize}
      /> */}
    </div>
  )
}

export default Icon
