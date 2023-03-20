import { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react'

import { coffeeOptions } from './coffee-options'
import { CoffeeCardContainer, HomeContainer } from './styles'
import { Header } from '../../components/Header'
import { coffeeCup } from '../../assets'
import { CartContext } from '../../contexts/CartContext'

import {
  CoffeeOption,
  coffeeOptionsReducer,
} from '../../reducers/coffeeOptions/reducer'
import {
  increaseCoffeeOptionAmountAction,
  decreaseCoffeeOptionAmountAction,
} from '../../reducers/coffeeOptions/actions'

export function Home() {
  const [coffeeOptionsState, coffeeOptionsDispatch] = useReducer(
    coffeeOptionsReducer,
    {
      coffeeOptions,
    },
  )
  const { addCoffeeToCart } = useContext(CartContext)
  const navigate = useNavigate()

  function handleDecreaseCoffeeOptionAmount(coffeeOptionId: string) {
    coffeeOptionsDispatch(decreaseCoffeeOptionAmountAction(coffeeOptionId))
  }

  function handleIncreaseCoffeeOptionAmount(coffeeOptionId: string) {
    coffeeOptionsDispatch(increaseCoffeeOptionAmountAction(coffeeOptionId))
  }

  function handleAddCoffeeToCart(event: any, coffeeOption: CoffeeOption) {
    event.preventDefault()
    addCoffeeToCart(coffeeOption)
    navigate('/checkout')
  }

  return (
    <div>
      <Header />
      <HomeContainer>
        <section>
          <div className="description">
            <div className="description-texts">
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div className="description-list-items">
              <div className="description-list-item">
                <div className="bg-yellow-700">
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="description-list-item">
                <div className="bg-yellow-500">
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="description-list-item">
                <div className="bg-base-text">
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="description-list-item">
                <div className="bg-purple-500">
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={coffeeCup} alt="" />
          </div>
        </section>
        <main>
          <h2>Nossos cafés</h2>
          <div className="coffeeCardsList">
            {coffeeOptionsState.coffeeOptions.map((coffeeOption) => (
              <CoffeeCardContainer key={coffeeOption.id}>
                <img src={coffeeOption.image} alt="" />
                <div className="coffeeTags">
                  {coffeeOption.tags.map((tag) => (
                    <span key={`${coffeeOption.id}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <h3>{coffeeOption.name}</h3>
                <p className="coffeeDescription">{coffeeOption.description}</p>
                <form
                  onSubmit={(event) =>
                    handleAddCoffeeToCart(event, coffeeOption)
                  }
                >
                  <p>
                    R$ <span>{coffeeOption.price}</span>
                  </p>
                  <div>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() =>
                        handleDecreaseCoffeeOptionAmount(coffeeOption.id)
                      }
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{coffeeOption.amount}</span>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() =>
                        handleIncreaseCoffeeOptionAmount(coffeeOption.id)
                      }
                    >
                      <Plus size={14} weight="bold" />
                    </button>
                  </div>
                  <button type="submit">
                    <ShoppingCartSimple size={22} weight="fill" />
                  </button>
                </form>
              </CoffeeCardContainer>
            ))}
          </div>
        </main>
      </HomeContainer>
    </div>
  )
}
