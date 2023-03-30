import Icon from '@/components/Icon/Icon'
import { BiHome } from 'react-icons/bi'
import { BsPersonCircle, BsBriefcase, BsEnvelope } from 'react-icons/bs'
import { SiReactos } from 'react-icons/si'
import { GiBookshelf } from 'react-icons/gi'
import cx from 'clsx'

const Menu = () => {
  return (
    <div
      className={cx(
        'animate__animated animate__bounceIn border-[1px] border-slate-700/100  right-[6%] h-max p-4 py-7 gap-8 flex flex-col rounded-full shadow-lg shadow-gray-600/30 bg-black/20 backdrop-blur-2xl fixed top-[30%] -translate-y-1/2',
        // max 1250px
        ' max-[1450px]:!flex-row max-[1450px]:py-4  max-[1450px]:top-[93%] max-[1450px]:!translate-y-0 max-[1450px]:!right-1/2 max-[1450px]:translate-x-1/2'
      )}>
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
      <Icon
        tooltip
        fontSize='xs'
        icon={<BsEnvelope />}
        message='Contact'
      />
    </div>
  )
}

export default Menu
