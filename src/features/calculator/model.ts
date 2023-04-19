import { useCallback, useMemo, useReducer } from 'react'
import { isValueEmpty } from '../../shared/lib'

const FIXED_VALUE = 2

export type CalculatorState = {
  bill: number | null
  tip: number | null
  customTip: number | null
  people: number | null
}

export type Action =
  | {
      type: 'bill' | 'tip' | 'people' | 'custom-tip'
      payload: number | null
    }
  | { type: 'reset' }

export const initialState: CalculatorState = {
  bill: null,
  tip: null,
  people: null,
  customTip: null,
}

export type CalculatorContextValue = ReturnType<typeof useCalculator>

const reducer = (state: CalculatorState, action: Action) => {
  switch (action.type) {
    case 'bill':
      return { ...state, bill: action.payload }
    case 'tip':
      return { ...state, tip: action.payload, customTip: null }
    case 'people':
      return { ...state, people: action.payload }
    case 'reset':
      return initialState
    case 'custom-tip':
      return { ...state, customTip: action.payload, tip: null }
    default:
      return state
  }
}

export const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { bill, people, tip, customTip } = state
  const selectedTip = tip || customTip

  const isNotEmpty = useMemo(
    () =>
      [bill, people, selectedTip].every(
        (value) => value !== null && value !== 0
      ),
    [bill, people, selectedTip]
  )

  const tipAmount = useMemo(() => {
    if (!isNotEmpty) return '0'

    const overallTipAmount = bill! * (selectedTip! / 100)
    return (overallTipAmount / people!).toFixed(FIXED_VALUE)
  }, [bill, selectedTip, people, isNotEmpty])

  const total = useMemo(() => {
    if (!isNotEmpty) return '0'

    return (bill! / people! + +tipAmount).toFixed(FIXED_VALUE)
  }, [bill, tipAmount, people, isNotEmpty])

  return {
    bill,
    people,
    tip,
    tipAmount,
    total,
    dispatch,
    isNotEmpty,
    customTip,
  }
}

export function handleInputChange(callback: (value: number | null) => void) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (isValueEmpty(value)) {
      callback(null)
      return
    }
    callback(+value)
  }
}
