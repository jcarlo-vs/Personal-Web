import { TechProjectProps } from '../TechProject/types'

export interface ProjectProps extends TechProjectProps {
  invert?: boolean
  description: string
  projectTitle: string
  technologyUsed: string[]
  image?: any
  demolink: string
  githublink: string
}
