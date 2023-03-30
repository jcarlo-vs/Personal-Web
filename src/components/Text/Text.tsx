import cx from 'clsx'
import React from 'react'
import { TextProps } from './types'

const Text = ({ size, className, children }: TextProps) => {
  return <p className={cx(`text-${size}`, className)}>{children}</p>
}

export default Text