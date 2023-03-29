import { ReactNode } from 'react'
import { ContentProps } from './types'
import cx from 'clsx'

const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      className={cx(
        'px-2 py-7 flex flex-col min-h-screen max-[1024px]:px-5 justify-center',
        className
      )}>
      {children}
    </div>
  )
}

export default Content
