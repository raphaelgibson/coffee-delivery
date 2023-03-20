import { useContext, useEffect } from 'react'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CheckoutContainer } from './styles'
import { Header } from '../../components/Header'
import { CartContext } from '../../contexts/CartContext'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'

const deliveryAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.string().min(1),
})

type DeliveryAddressFormData = zod.infer<
  typeof deliveryAddressFormValidationSchema
>

export function Checkout() {
  const {
    cart,
    cartPrice,
    decreaseCoffeeAmountInCart,
    increaseCoffeeAmountInCart,
    removeCoffeeFromCart,
    setDeliveryAddress,
  } = useContext(CartContext)
  const navigate = useNavigate()

  const deliveryAddressForm = useForm<DeliveryAddressFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
  })

  const { handleSubmit, reset } = deliveryAddressForm

  useEffect(() => {
    if (cart.coffees.length < 1) {
      navigate('/')
    }
  }, [cart, navigate])

  function handleDecreaseCoffeeAmountInCart(coffeeId: string) {
    decreaseCoffeeAmountInCart(coffeeId)
  }

  function handleIncreaseCoffeeAmountInCart(coffeeId: string) {
    increaseCoffeeAmountInCart(coffeeId)
  }

  function handleRemoveCoffeeFromCart(coffeeId: string) {
    removeCoffeeFromCart(coffeeId)
  }

  function handleSetDeliveryAddress(data: DeliveryAddressFormData) {
    setDeliveryAddress(data)
    reset()
    navigate('/success')
  }

  return (
    <div>
      <Header />
      <CheckoutContainer>
        <form
          onSubmit={handleSubmit(handleSetDeliveryAddress)}
          autoComplete="off"
        >
          <FormProvider {...deliveryAddressForm}>
            <DeliveryAddressForm />
          </FormProvider>
          <section className="cartResume">
            <h3>Cafés selecionados</h3>
            <div>
              {cart.coffees.map((coffee) => (
                <div key={coffee.id} className="coffeeCard">
                  <div>
                    <img src={coffee.image} alt="" />
                    <div className="coffeeDescription">
                      <p>{coffee.name}</p>
                      <div className="amountControl">
                        <div>
                          <button
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() =>
                              handleDecreaseCoffeeAmountInCart(coffee.id)
                            }
                          >
                            <Minus size={14} weight="bold" />
                          </button>
                          <span>{coffee.amount}</span>
                          <button
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() =>
                              handleIncreaseCoffeeAmountInCart(coffee.id)
                            }
                          >
                            <Plus size={14} weight="bold" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="removeAmount"
                          onClick={() => handleRemoveCoffeeFromCart(coffee.id)}
                        >
                          <Trash size={16} />
                          <span>remover</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>R${coffee.price}</span>
                </div>
              ))}
              <div className="costResume">
                <div>
                  <span>Total de itens</span>
                  <span>R${cartPrice}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$3,5</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R${Number((cartPrice + 3.5).toPrecision(4))}</span>
                </div>
              </div>
              <button type="submit">confirmar pedido</button>
            </div>
          </section>
        </form>
      </CheckoutContainer>
    </div>
  )
}
