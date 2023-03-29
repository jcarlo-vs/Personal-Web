import { InputProps } from './types'

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className='flex flex-col max-w-xs gap-1'>
      <label
        htmlFor=''
        className='font-medium text-xs'>
        {label} <span className='text-red-500'>*</span>
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='border border-slate-400/20 bg-none bg-transparent backdrop-blur-lg text-xs font-thin tracking-wider p-2 outline-none text-slate-300'
      />
    </div>
  )
}

export default Input
