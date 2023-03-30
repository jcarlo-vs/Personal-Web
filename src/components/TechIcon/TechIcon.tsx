import Image from 'next/image'
import { TechIconProps } from './types'

const TechIcon = ({ image, title }: TechIconProps) => {
  return (
    <div className='w-20 flex flex-col items-center border-[1.5px] border-slate-700/50 backdrop-blur-xl p-1 hover:-translate-y-1 transition-all max-[768px]:w-18 justify-center'>
      <p className='text-[8px] font-thin font-sans text-center tracking-widest max-[768px]:text-[8px]'>
        {title}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className='grayscale-[1] hover:grayscale-0 p-2 transition-all'
      />
    </div>
  )
}

export default TechIcon
