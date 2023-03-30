import { ReactNode } from 'react'
import { IndicatorProps } from '../Indicator/types'

export interface SectionProps extends IndicatorProps {
  children: ReactNode
  className?: string
  snap?: 'start' | 'center' | 'end'
  id: string
  style?: boolean
}
