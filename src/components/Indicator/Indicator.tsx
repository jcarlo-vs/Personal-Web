import { Icon } from '../Icon'
import { Text } from '../Text'
import { IndicatorProps } from './types'

const Indicator = ({ className, icon, name }: IndicatorProps) => {
  return (
    <div className='flex items-center border border-gray-400/30 w-max p-1 px-4 rounded-full gap-4 mb-12 bg-slate-700/50'>
      <Icon icon={icon} className={className} />
      <Text size='tiny' className='text-xs uppercase font-sans'>
        {name}
      </Text>
    </div>
  )
}

export default Indicator
