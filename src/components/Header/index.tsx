import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const totalCartItems = cart.coffees.reduce(
    (coffeeAmount, coffee) => coffeeAmount + coffee.amount,
    0,
  )

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Gonçalo, RJ</span>
        </div>
        <NavLink to={totalCartItems > 0 ? '/checkout' : ''} title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <div>{totalCartItems}</div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
