import { Calculator } from '../features/calculator'
import { Logo } from '../shared/ui/logo'

import './index.css'

const tips = [5, 10, 15, 25, 50]

export function App() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-cyan-light-grayish">
      <div className="items-center w-full flex flex-col space-y-12">
        <Logo />

        <Calculator />
      </div>
    </div>
  )
}
