import AboutPage from './AboutPage'
import HomePage from './HomePage'
import ResumePage from './ResumePage'
import SkillsPage from './SkillsPage'

const PageSection = () => {
  return (
    <div className='border w-[900px] overflow-scroll h-screen px-4'>
      <HomePage />
      <AboutPage />
      <ResumePage />
      <SkillsPage />
    </div>
  )
}

export default PageSection
