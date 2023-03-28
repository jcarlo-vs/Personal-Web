import Image from 'next/image'
import { TechIconProps } from './types'

const TechIcon = ({ image, title }: TechIconProps) => {
  return (
    <div className='w-20 flex flex-col justify-center items-center border-[1.5px] border-slate-700/50 backdrop-blur-xl p-1 hover:-translate-y-1 transition-all '>
      <p className='text-[8px] font-thin font-sans tracking-widest'>{title}</p>
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className='grayscale-[1] hover:grayscale-0 p-2 transition-all
            
            '
      />
    </div>
  )
}

export default TechIcon
