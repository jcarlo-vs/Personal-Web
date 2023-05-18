import clsx from 'clsx'
import { TextAreaProps } from './types'

const TextArea = ({ label, placeholder, className }: TextAreaProps) => {
  return (
    <div className='flex flex-col max-w-xs'>
      <label htmlFor='' className='font-medium text-xs'>
        {label} <span className='text-red-500'>*</span>
      </label>

      <textarea
        placeholder={placeholder}
        rows={50}
        cols={30}
        maxLength={500}
        className={clsx(
          'border border-slate-400/20 bg-none bg-transparent backdrop-blur-lg text-xs font-thin tracking-wider p-2 outline-none text-slate-100',
          className
        )}
      ></textarea>
    </div>
  )
}

export default TextArea
