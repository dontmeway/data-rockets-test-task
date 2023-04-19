export { ReactComponent as IconDollar } from './icon-dollar.svg'
export { ReactComponent as IconPerson } from './icon-person.svg'
export { ReactComponent as IconLogo } from './logo.svg'
export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined
  }
>
