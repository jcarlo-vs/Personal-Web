import { IconProps } from '../Icon/types'
import { TextProps } from '../Text'

export interface IndicatorProps extends IconProps, Omit<TextProps, 'children'> {
  className?: string
  name: string
  indicator?: boolean
}
