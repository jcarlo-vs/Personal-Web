import notelifyApp from '../../assets/images/appNotelify.png'
import notelifyv1 from '../../assets/images/notelifyv1.png'
import Image from 'next/image'
import { Text } from '../Text'
import blob from '../../assets/images/blob.png'
import TechProject from '../TechProject/TechProject'
import { ProjectProps } from './types'
import cx from 'clsx'
import Link from 'next/link'

const Project = ({
  invert,
  technologyUsed,
  description,
  projectTitle,
  image,
  demolink,
  githublink,
}: ProjectProps) => {
  return (
    <div
      className={cx(
        'border-slate-600 border-l-4 flex  max-[768px]:flex-col max-[768px]:items-center',
        invert && 'flex-row-reverse !border-l-0 border-r-4'
      )}>
      {/* LEFT SECTION */}
      <div
        className='p-3 px-10 flex max-[768px]:!px-3'
        style={{
          background: 'rgba(255,255,255,0.1)',
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
        <Image
          src={image}
          height={0}
          width={280}
          alt='notelifyApp'
          className='max-w-[300px] max-[1024px]:!max-w-[250px]'
        />
      </div>

      {/* RIGHT SECTION */}
      <div className='max-w-sm p-10  max-[768px]:p-4'>
        {/* TITLE */}
        <Text
          size='2xl'
          className='font-mono mb-10 max-[768px]:text-xl'>
          <span
            style={{
              background: 'linear-gradient(90deg,#00dbde,#fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '#9c0a88 1px 20px 100px',
            }}
            className='tracking-wide'>
            {projectTitle}
          </span>
        </Text>

        {/* DESCRIPTION */}

        <p className='font-thin font-sans max-[768px]:text-sm'>{description}</p>

        {/* TECH STACKS */}
        <article className='flex gap-1'>
          {technologyUsed?.map((t, index) => {
            return (
              <TechProject
                key={index}
                tech={t}
              />
            )
          })}
        </article>

        {/* DEMO , GITHUB */}
        <div className='flex gap-3 mt-5'>
          <Link
            href={demolink}
            target='_blank'
            className='hover:cursor-pointer hover:-translate-y-1 transition-all'>
            <Text
              size='xs'
              className='border p-2 tracking-widest border-slate-700 text-pink-500'>
              LIVE DEMO
            </Text>
          </Link>
          <Link
            href={githublink}
            target='_blank'
            className='hover:cursor-pointer hover:-translate-y-1 transition-all'>
            <Text
              size='xs'
              className='border p-2 tracking-widest border-slate-700 text-blue-500'>
              GITHUB
            </Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
