import { CoffeeOption } from '../coffeeOptions/reducer'
import { DeliveryAddress } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  DECREASE_COFFEE_AMOUNT_IN_CART = 'DECREASE_COFFEE_AMOUNT_IN_CART',
  INCREASE_COFFEE_AMOUNT_IN_CART = 'INCREASE_COFFEE_AMOUNT_IN_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
}

export function addCoffeeToCartAction(coffee: CoffeeOption) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function decreaseCoffeeAmountInCartAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function increaseCoffeeAmountInCartAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_AMOUNT_IN_CART,
    payload: {
      coffeeId,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function setDeliveryAddressAction(deliveryAddress: DeliveryAddress) {
  return {
    type: ActionTypes.SET_DELIVERY_ADDRESS,
    payload: {
      deliveryAddress,
    },
  }
}
