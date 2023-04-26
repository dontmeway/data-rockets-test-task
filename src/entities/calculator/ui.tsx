import { clsx } from 'clsx'
import { useCallback, useState } from 'react'

type TipButtonProps = {
  percentage: number
  onClick: (percentage: number) => void
  isActive: boolean
}

export const TipButton = ({
  percentage,
  onClick,
  isActive,
}: TipButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full rounded text-center py-2 hover:bg-opacity-70 text-lg',
        {
          'bg-cyan-very-dark text-white': !isActive,
          'bg-primary text-cyan-very-dark': isActive,
        }
      )}
      onClick={() => onClick(percentage)}
      type="button"
    >
      <span>{percentage}</span>
      <span>%</span>
    </button>
  )
}

type CustomTipButtonProps = {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const CustomTipButton = ({ onChange, value }: CustomTipButtonProps) => {
  const [isFocused, setFocus] = useState(false)
  const hasValue = value !== null
  const showInput = hasValue || isFocused

  const handleClick = useCallback(() => {
    setFocus(true)
  }, [])

  if (showInput) {
    return (
      <input
        autoFocus
        onBlur={() => setFocus(false)}
        className="w-full rounded py-2 px-4 hover:bg-opacity-70 text-lg bg-cyan-very-light-grayish text-cyan-very-dark outline-2 outline-cyan-very-light-grayish focus:outline-primary"
        type="number"
        dir="rtl"
        max="100"
        placeholder="0"
        value={value}
        onChange={onChange}
      />
    )
  }

  return (
    <button
      className={clsx(
        'w-full rounded text-center py-2 hover:bg-opacity-70 text-lg bg-cyan-very-light-grayish text-cyan-very-dark'
      )}
      onClick={handleClick}
      type="button"
    >
      <span>{'Custom'}</span>
    </button>
  )
}

type ResultRowProps = {
  label: string
  subLabel: string
  result: number | string
}

export const ResultRow = ({ label, result, subLabel }: ResultRowProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col space-y-1">
        <span className="text-sm text-white">{label}</span>
        <span className="text-xs text-cyan-grayish">{subLabel}</span>
      </div>

      <span className="text-4xl text-primary">${result}</span>
    </div>
  )
}
