import cx from 'clsx'
import React from 'react'
import { TooltipProps } from './types'

const Tooltip = ({ message, fontSize }: TooltipProps) => {
  return (
    <div
      className={cx(
        `border border-gray-700/40 flex justify-center absolute right-10 top-1/2 -translate-y-1/2 p-2 text-${fontSize} opacity-0 peer-hover:!opacity-100 bg-gray-600/30 transition-all`
      )}>
      {message}
    </div>
  )
}

export default Tooltip
