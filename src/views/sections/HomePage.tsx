/* eslint-disable react/no-unescaped-entities */
import Text from '@/components/Text/Text'
import Content from '@/layout/Content'

const HomePage = () => {
  return (
    <Content className='mt-50 max-[1250px]:mt-20'>
      <div className='m-w-[800px] flex mb-20 max-[768px]:mb-14'>
        <Text
          size='2xl'
          className='!text-9xl font-thin max-[1024px]:!text-8xl max-[768px]:!text-6xl max-[500px]:!text-5xl'>
          Hi, I'm
        </Text>
        <div
          className='text-9xl ml-8 max-[1024px]:!text-8xl max-[768px]:!text-6xl max-[500px]:!text-5xl'
          style={{
            background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          Juan
        </div>
      </div>

      <div className='[&>*]:mb-8 [&>*]:mt-8 max-[768px]:[&>*]:mt-3'>
        <Text
          className='text-5xl font-semibold max-[1024px]:!text-3xl max-[768px]:!text-xl'
          size='xl'>
          I Build Things For The Web.
        </Text>
        <Text
          className='text-3xl font-thin max-[1024px]:!text-2xl max-[768px]:!text-xl'
          size='xl'>
          currently working on both
        </Text>
        <Text
          className='text-3xl font-semibold max-[1024px]:!text-2xl max-[768px]:!text-xl'
          size='xl'>
          FRONT-END and BACK-END Development.
        </Text>
      </div>
    </Content>
  )
}

export default HomePage

// EXTRAS
{
  /* <p
          className='text-9xl text-slate-900 drop-shadow-2xl shadow-white font-thin'
          style={{ textShadow: '#FFF 0 2px 5px' }}>
          Juan
        </p> */
}
{
  /* <div className='text-5xl font-extrabold ml-5'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-900 text-9xl'>
            Juan
          </span>
        </div> */
}
