import cx from 'clsx'
import Tooltip from '../Tooltip/Tooltip'
import { IconProps } from './types'

const Icon = ({
  icon,
  message,
  fontSize,
  tooltip,
  className = '[&>*]:h-5 [&>*]:w-5 [&>*]:text-gray-600 [&>*]:hover:text-purple-600',
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
