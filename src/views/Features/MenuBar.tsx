import Icon from '@/components/Icon/Icon'
import { BiHome } from 'react-icons/bi'
import { BsPersonCircle, BsBriefcase, BsEnvelope } from 'react-icons/bs'
import { SiReactos } from 'react-icons/si'
import { GiBookshelf } from 'react-icons/gi'
import cx from 'clsx'

const Menu = () => {
  return (
    <div
      id='mediaOn'
      className={cx(
        'animate__animated animate__bounceIn border-[1px] border-slate-700/100  right-[6%] h-max p-4 py-7 gap-8 flex flex-col rounded-full shadow-lg shadow-gray-600/30 bg-black/20 backdrop-blur-2xl fixed bottom-[30%]',
        // max 1450px
        'max-[1250px]:flex-row max-[1250px]:w-full max-[1250px]:right-0 max-[1250px]:!bottom-0 mb-3 max-[1250px]:py-4'
      )}>
      <Icon
        fontSize='xs'
        icon={<BiHome />}
        message='Home'
      />
      <Icon
        fontSize='xs'
        icon={<BsPersonCircle />}
        message='About'
      />
      <Icon
        fontSize='xs'
        icon={<BsBriefcase />}
        message='Resume'
      />
      <Icon
        fontSize='xs'
        icon={<SiReactos />}
        message='Skills'
      />
      <Icon
        fontSize='xs'
        icon={<GiBookshelf />}
        message='Projects'
      />
      <Icon
        fontSize='xs'
        icon={<BsEnvelope />}
        message='Contact'
      />
    </div>
  )
}

export default Menu
