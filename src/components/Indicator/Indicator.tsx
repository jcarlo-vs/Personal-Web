import { BsPerson } from 'react-icons/bs'
import Icon from '../Icon/Icon'
import { Text } from '../Text'
import { IndicatorProps } from './types'
import cx from 'clsx'

const Indicator = ({ className, children, icon }: IndicatorProps) => {
  return (
    <div className='flex items-center border border-gray-400/30 w-max p-1 px-4 rounded-full gap-4 mb-12 bg-slate-700/50'>
      <Icon
        icon={icon}
        className={className}
      />
      <Text
        size='xs'
        className='text-xs uppercase font-sans'>
        {children}
      </Text>
    </div>
  )
}

export default Indicator
