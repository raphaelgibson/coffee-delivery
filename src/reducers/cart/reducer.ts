import produce from 'immer'
import { CoffeeOption } from '../coffeeOptions/reducer'
import { ActionTypes } from './actions'

export interface DeliveryAddress {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: string
}

export interface Cart {
  coffees: CoffeeOption[]
  deliveryAddress?: DeliveryAddress
}

interface CartState {
  cart: Cart
  cartPrice: number
}

function updateCartPrice(draft: CartState) {
  draft.cartPrice = Number(
    draft.cart.coffees
      .reduce((cartPrice, coffee) => cartPrice + coffee.price, 0)
      .toPrecision(4),
  )
}

function updateCoffeePrice(coffee: CoffeeOption) {
  coffee.price = Number((coffee.amount * 9.9).toPrecision(3))
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeIndex = state.cart.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id,
      )

      return produce(state, (draft) => {
        if (coffeeIndex === -1) {
          draft.cart.coffees.push(action.payload.coffee)
        } else {
          draft.cart.coffees[coffeeIndex].amount++
          updateCoffeePrice(draft.cart.coffees[coffeeIndex])
        }
        updateCartPrice(draft)
      })
    }
    case ActionTypes.DECREASE_COFFEE_AMOUNT_IN_CART: {
      const coffeeIndex = state.cart.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )
      return produce(state, (draft) => {
        if (draft.cart.coffees[coffeeIndex].amount === 1) {
          draft.cart.coffees = draft.cart.coffees.filter(
            (coffee) => coffee.id !== action.payload.coffeeId,
          )
        } else {
          draft.cart.coffees[coffeeIndex].amount--
          updateCoffeePrice(draft.cart.coffees[coffeeIndex])
        }
        updateCartPrice(draft)
      })
    }
    case ActionTypes.INCREASE_COFFEE_AMOUNT_IN_CART: {
      const coffeeIndex = state.cart.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )
      return produce(state, (draft) => {
        if (draft.cart.coffees[coffeeIndex].amount < 10) {
          draft.cart.coffees[coffeeIndex].amount++
          updateCoffeePrice(draft.cart.coffees[coffeeIndex])
        }
      })
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        draft.cart.coffees = draft.cart.coffees.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        )
        updateCartPrice(draft)
      })
    case ActionTypes.SET_DELIVERY_ADDRESS:
      return produce(state, (draft) => {
        draft.cart.deliveryAddress = action.payload.deliveryAddress
        draft.cart.coffees = []
      })
    default:
      return state
  }
}
