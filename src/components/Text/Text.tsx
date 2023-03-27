'use client'
import cx from 'clsx'
import React, { ReactNode } from 'react'
import { TextProps } from './types'

const Text = ({ size, className, children }: TextProps) => {
  return <div className={cx(`text-${size}`, className)}>{children}</div>
}

export default Text
