import cx from 'clsx'
import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import Tooltip from '../Tooltip/Tooltip'
import { TooltipProps } from '../Tooltip/tooltip'

interface IconProps extends TooltipProps {
  icon: ReactNode
  className?: string
  tooltip: boolean
}

const Icon = ({
  icon,
  message,
  fontSize,
  tooltip,
  className = '[&>*]:h-8 [&>*]:w-8 [&>*]:text-gray-600 [&>*]:hover:text-purple-600',
}: IconProps) => {
  return (
    <div className='relative '>
      <div className={cx(className, `hover:cursor-pointer peer`)}>{icon}</div>
      {tooltip && (
        <Tooltip
          message={message}
          fontSize={fontSize}
        />
      )}
    </div>
  )
}

export default Icon
