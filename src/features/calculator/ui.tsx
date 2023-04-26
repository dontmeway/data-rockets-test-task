import { createContext, useContext } from 'react'
import {
  CustomTipButton,
  ResultRow,
  TipButton,
} from '../../entities/calculator'
import { IconDollar, IconPerson } from '../../shared/icons'
import { Button } from '../../shared/ui/button'
import { Input } from '../../shared/ui/input'

import * as model from './model'

const tips = [5, 10, 15, 25, 50]

const CalculatorContext = createContext<model.CalculatorContextValue | null>(
  null
)

export const Calculator = () => {
  const ctxValue = model.useCalculator()
  return (
    <CalculatorContext.Provider value={ctxValue}>
      <div className="max-w-3xl w-full rounded-xl shadow-md bg-white grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-5">
        <div className="flex flex-col space-y-5 p-2">
          <BillInput />

          <TipsList />

          <PeopleInput />
        </div>

        <Result />
      </div>
    </CalculatorContext.Provider>
  )
}

const BillInput = () => {
  const ctxValue = useContext(CalculatorContext)

  if (!ctxValue) {
    return null
  }

  const { bill, dispatch } = ctxValue

  return (
    <Input
      label="Bill"
      LeftIcon={IconDollar}
      value={bill ?? ''}
      onChange={model.handleInputChange((value) =>
        dispatch({ type: 'bill', payload: value })
      )}
    />
  )
}

const PeopleInput = () => {
  const ctxValue = useContext(CalculatorContext)

  if (!ctxValue) {
    return null
  }

  const { people, dispatch } = ctxValue

  return (
    <Input
      label="Number of People"
      LeftIcon={IconPerson}
      value={people ?? ''}
      onChange={model.handleInputChange((value) =>
        dispatch({ type: 'people', payload: value })
      )}
    />
  )
}

const TipsList = () => {
  const ctxValue = useContext(CalculatorContext)

  if (!ctxValue) {
    return null
  }

  const { dispatch, tip: selectedTip, customTip } = ctxValue

  return (
    <div className="flex flex-col space-y-1.5">
      <span className="text-sm text-cyan-grayish">Select Tip %</span>
      <div className="w-full grid grid-cols-3 gap-3">
        {tips.map((tip) => (
          <TipButton
            isActive={tip === selectedTip}
            key={tip}
            percentage={tip}
            onClick={() =>
              dispatch({
                payload: tip,
                type: 'tip',
              })
            }
          />
        ))}

        <CustomTipButton
          hasValue={customTip !== null}
          value={customTip?.toString() ?? ''}
          onChange={model.handleInputChange((value) =>
            dispatch({ type: 'custom-tip', payload: value })
          )}
        />
      </div>
    </div>
  )
}

const Result = () => {
  const ctxValue = useContext(CalculatorContext)

  if (!ctxValue) {
    return null
  }

  const { tipAmount, total, dispatch, isNotEmpty } = ctxValue

  return (
    <div className="rounded-lg bg-cyan-very-dark p-8 flex flex-col">
      <div className="flex flex-col flex-grow space-y-5 mb-8">
        <ResultRow label="Tip Amount" subLabel="/ person" result={tipAmount} />
        <ResultRow label="Total" subLabel="/ person" result={total} />
      </div>

      <Button
        disabled={!isNotEmpty}
        onClick={() =>
          dispatch({
            type: 'reset',
          })
        }
      >
        RESET
      </Button>
    </div>
  )
}
