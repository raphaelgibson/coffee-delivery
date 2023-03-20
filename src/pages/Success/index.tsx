import { useContext, useEffect } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { SuccessContainer } from './styles'
import { Header } from '../../components/Header'
import { deliveryman } from '../../assets'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!cart.deliveryAddress) {
      navigate('/')
    }
  }, [cart, navigate])

  return (
    <div>
      <Header />
      <SuccessContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <section>
          <div>
            <div className="deliveryData">
              <div className="deliveryDataItem">
                <div className="bg-purple-500">
                  <MapPin size={16} weight="fill" />
                </div>
                <div>
                  <span>
                    Entrega em{' '}
                    <strong>
                      {cart.deliveryAddress?.street},{' '}
                      {cart.deliveryAddress?.number}
                    </strong>
                  </span>
                  <span>
                    {cart.deliveryAddress?.neighborhood} -{' '}
                    {cart.deliveryAddress?.city}, {cart.deliveryAddress?.uf}
                  </span>
                </div>
              </div>
              <div className="deliveryDataItem">
                <div className="bg-yellow-500">
                  <Timer size={16} weight="fill" />
                </div>
                <div>
                  <span>Previsão de entrega</span>
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                </div>
              </div>
              <div className="deliveryDataItem">
                <div className="bg-yellow-700">
                  <CurrencyDollar size={16} weight="fill" />
                </div>
                <div>
                  <span>Pagamento na entrega</span>
                  <span>
                    <strong>{cart.deliveryAddress?.paymentMethod}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={deliveryman} alt="" />
          </div>
        </section>
      </SuccessContainer>
    </div>
  )
}
