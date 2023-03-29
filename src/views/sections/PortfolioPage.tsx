import Indicator from '@/components/Indicator/Indicator'
import Project from '@/components/Project/Project'
import { Text } from '@/components/Text'
import Content from '@/layout/Content'
import { BsBriefcase } from 'react-icons/bs'
import notelify from '../../assets/images/notelifyv1.png'
import cryptometer from '../../assets/images/cryptometerv1.png'
import picabook from '../../assets/images/picabookv1.png'
const PortfolioPage = () => {
  return (
    <Content>
      <Indicator
        size='xl'
        icon={<BsBriefcase />}
        className='text-sm'>
        PORTFOLIO
      </Indicator>

      <div>
        <Text
          size='2xl'
          className='font-mono text-4xl max-[1024px]:!text-3xl max-[768px]:!text-2xl'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}>
            Projects
          </span>
        </Text>
      </div>

      {/* PROJECT AREA */}
      <div className='border-white mt-14 flex flex-col gap-32'>
        <Project
          image={notelify}
          technologyUsed={['MONGO DB', 'EXPRESS JS', 'REACT JS']}
          projectTitle='NOTELIFY APP'
          description='A note and save fullstack-app which will let you store your own notes.
          Secure it. Input your plans. Save it. Get back on it. Your account,
          your own data.'
        />
        <Project
          invert
          image={cryptometer}
          technologyUsed={['REACT JS', 'REDUX']}
          projectTitle='CRYPTO METER'
          description={`An all-in-one Crypto Library which users can browse most trusted Exchanges, thousands of Cryptocurrencies, Crypto News, Crypto Beginner's Guide and Crypto calculator.`}
        />
        <Project
          image={picabook}
          technologyUsed={['MONGO DB', 'EXPRESS JS', 'REACT JS']}
          projectTitle='PICABOOK'
          description={`A Social Media app, which let you share your own photos to public, give caption and view other's profile.`}
        />
      </div>
    </Content>
  )
}

export default PortfolioPage
