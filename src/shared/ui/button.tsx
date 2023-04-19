import { clsx } from 'clsx'

type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type Props = NativeButtonProps

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        'w-full bg-primary text-cyan-very-dark py-2 text-base rounded hover:bg-opacity-90 disabled:bg-cyan-dark-grayish',
        className
      )}
    >
      {props.children}
    </button>
  )
}
