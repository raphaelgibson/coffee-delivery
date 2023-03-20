export enum ActionTypes {
  DECREASE_COFFEE_OPTION_AMOUNT = 'DECREASE_COFFEE_OPTION_AMOUNT',
  INCREASE_COFFEE_OPTION_AMOUNT = 'INCREASE_COFFEE_OPTION_AMOUNT',
}

export function decreaseCoffeeOptionAmountAction(coffeeOptionId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_OPTION_AMOUNT,
    payload: {
      coffeeOptionId,
    },
  }
}

export function increaseCoffeeOptionAmountAction(coffeeOptionId: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_OPTION_AMOUNT,
    payload: {
      coffeeOptionId,
    },
  }
}
