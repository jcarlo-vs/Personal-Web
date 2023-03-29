import Sidebar from '@/components/Sidebar/Sidebar'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import HomePage from './HomePage'
import PortfolioPage from './PortfolioPage'
import ResumePage from './ResumePage'
import SkillsPage from './SkillsPage'
import Menu from '../menu/menu'

const PageSection = () => {
  return (
    <div className='overflow-y-scroll overflow-x-hidden h-screen w-screen gap-60 flex border max-[1250px]:!flex-col max-[1250px]:gap-5'>
      <Sidebar />
      <div
        className='flex gap-40 flex-col  m-auto ml-[33%] max-w-3xl max-[1250px]:ml-0 max-[1250px]:!m-auto'
        style={{}}>
        <HomePage />
        <AboutPage />
        <ResumePage />
        <SkillsPage />
        <PortfolioPage />
        <ContactPage />
      </div>
      <Menu />
    </div>
  )
}

export default PageSection
