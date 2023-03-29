import { TechProjectProps } from './types'

const TechProject = ({ tech }: TechProjectProps) => {
  return (
    <div className='border border-slate-700/50 w-max p-2 backdrop-blur-xl bg-green-300/10 mt-3'>
      <p className='font-light font-sans text-slate-300/70 text-xs'>{tech}</p>
    </div>
  )
}

export default TechProject
