import { ReactNode } from 'react'
import { TooltipProps } from '../Tooltip'

export interface IconProps extends TooltipProps {
  icon: ReactNode
  className?: string
  tooltip?: boolean
}
