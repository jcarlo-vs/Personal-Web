import { StaticImageData } from 'next/image'
import { TechProjectProps } from '../TechProject/types'
import { ReactNode } from 'react'

export interface ProjectProps extends TechProjectProps {
  invert?: boolean
  description: string
  projectTitle: string
  technologyUsed: string[]
  image?: any
  demolink: string
  githublink: string
}
