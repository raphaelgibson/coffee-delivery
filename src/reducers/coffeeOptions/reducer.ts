import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CoffeeOption {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  amount: number
}

interface CoffeeOptionsState {
  coffeeOptions: CoffeeOption[]
}

export function coffeeOptionsReducer(state: CoffeeOptionsState, action: any) {
  switch (action.type) {
    case ActionTypes.DECREASE_COFFEE_OPTION_AMOUNT:
      return produce(state, (draft) => {
        const coffeeOptionIndex = state.coffeeOptions.findIndex(
          (coffeeOption) => {
            return coffeeOption.id === action.payload.coffeeOptionId
          },
        )

        if (state.coffeeOptions[coffeeOptionIndex].amount > 1) {
          const coffeeOptionToChange = draft.coffeeOptions[coffeeOptionIndex]

          coffeeOptionToChange.amount--
          coffeeOptionToChange.price = Number(
            (coffeeOptionToChange.amount * 9.9).toPrecision(3),
          )
        }
      })
    case ActionTypes.INCREASE_COFFEE_OPTION_AMOUNT:
      return produce(state, (draft) => {
        const coffeeOptionIndex = state.coffeeOptions.findIndex(
          (coffeeOption) => {
            return coffeeOption.id === action.payload.coffeeOptionId
          },
        )

        if (state.coffeeOptions[coffeeOptionIndex].amount < 10) {
          const coffeeOptionToChange = draft.coffeeOptions[coffeeOptionIndex]

          coffeeOptionToChange.amount++
          coffeeOptionToChange.price = Number(
            (coffeeOptionToChange.amount * 9.9).toPrecision(3),
          )
        }
      })
    default:
      return state
  }
}
