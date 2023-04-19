import { clsx } from 'clsx'

import { IconType } from '../icons'

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = {
  LeftIcon: IconType
  label: string
} & NativeInputProps

export const Input = ({ LeftIcon, value, label, ...props }: Props) => {
  return (
    <label className="w-full h-max">
      <span className="text-sm text-cyan-grayish mb-1.5">{label}</span>
      <div className="w-full h-12 relative">
        <LeftIcon className="z-10 absolute left-4 top-1/2 transform -translate-y-1/2" />
        <input
          {...props}
          dir="rtl"
          value={value}
          type="number"
          placeholder="0"
          className={clsx(
            'pr-4 pl-8 absolute inset-0 rounded border-2 border-cyan-very-light-grayish focus:border-primary focus:outline-none text-2xl font-medium bg-cyan-very-light-grayish text-cyan-very-dark'
          )}
        />
      </div>
    </label>
  )
}
