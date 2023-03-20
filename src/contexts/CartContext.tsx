import { createContext, ReactNode, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  decreaseCoffeeAmountInCartAction,
  increaseCoffeeAmountInCartAction,
  removeCoffeeFromCartAction,
  setDeliveryAddressAction,
} from '../reducers/cart/actions'
import { Cart, cartReducer, DeliveryAddress } from '../reducers/cart/reducer'
import { CoffeeOption } from '../reducers/coffeeOptions/reducer'

interface CartContextType {
  cart: Cart
  cartPrice: number
  addCoffeeToCart: (coffeeOption: CoffeeOption) => void
  decreaseCoffeeAmountInCart: (coffeeId: string) => void
  increaseCoffeeAmountInCart: (coffeeId: string) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  setDeliveryAddress: (data: DeliveryAddress) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: { coffees: [], deliveryAddress: undefined },
    cartPrice: 0,
  })

  function addCoffeeToCart(coffeeOption: CoffeeOption) {
    cartDispatch(addCoffeeToCartAction(coffeeOption))
  }

  function decreaseCoffeeAmountInCart(coffeeId: string) {
    cartDispatch(decreaseCoffeeAmountInCartAction(coffeeId))
  }

  function increaseCoffeeAmountInCart(coffeeId: string) {
    cartDispatch(increaseCoffeeAmountInCartAction(coffeeId))
  }

  function removeCoffeeFromCart(coffeeId: string) {
    cartDispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function setDeliveryAddress(data: DeliveryAddress) {
    cartDispatch(setDeliveryAddressAction(data))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartPrice: cartState.cartPrice,
        addCoffeeToCart,
        decreaseCoffeeAmountInCart,
        increaseCoffeeAmountInCart,
        removeCoffeeFromCart,
        setDeliveryAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
