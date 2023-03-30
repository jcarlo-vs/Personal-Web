import Link from 'next/link'
import { TechProjectProps } from './types'

const TechProject = ({ tech }: TechProjectProps) => {
  return (
    <section>
      <div className='border border-slate-700/50 w-max p-2 backdrop-blur-xl bg-green-300/10 mt-3'>
        <p className='font-light font-sans text-slate-300/70 text-xs'>{tech}</p>
      </div>

      {/* GITHUB */}
    </section>
  )
}

export default TechProject

// https://notelify-app.vercel.app/landing
// https://github.com/jcarlo-vs/NOTELIFY-APP

// https://crypto-meter.vercel.app/
// https://github.com/jcarlo-vs/CRYPTO-METER

// https://picabook-app.vercel.app/login
// https://github.com/jcarlo-vs/picabook-app
