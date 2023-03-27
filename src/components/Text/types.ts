import { ReactNode } from 'react'

export type TextProps = {
  className?: string
  size: 'lg' | 'md' | 'sm' | 'xs' | 'xl' | '2xl' | '3xl'
  children: ReactNode
}
