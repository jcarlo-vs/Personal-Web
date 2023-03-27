import Icon from '@/components/Icon/Icon'
import { BiHome } from 'react-icons/bi'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import { SiReactos } from 'react-icons/si'
import { GiBookshelf } from 'react-icons/gi'

const Menu = () => {
  return (
    <div className='absolute border-[1px] border-slate-700/50   bottom-1/2 right-[8%] translate-y-1/2 p-5 gap-8 flex flex-col rounded-2xl shadow-lg shadow-gray-600/30 bg-black/20 backdrop-blur-2xl'>
      <Icon
        tooltip
        fontSize='xs'
        icon={<BiHome />}
        message='Home'
      />
      <Icon
        tooltip
        fontSize='xs'
        icon={<BsPersonCircle />}
        message='About'
      />
      <Icon
        tooltip
        fontSize='xs'
        icon={<BsBriefcase />}
        message='Resume'
      />
      <Icon
        tooltip
        fontSize='xs'
        icon={<SiReactos />}
        message='Skills'
      />
      <Icon
        tooltip
        fontSize='xs'
        icon={<GiBookshelf />}
        message='Projects'
      />
    </div>
  )
}

export default Menu
