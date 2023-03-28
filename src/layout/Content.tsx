import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className='px-2 py-7 h-screen flex flex-col justify-center'>
      {children}
    </div>
  )
}

export default Content
