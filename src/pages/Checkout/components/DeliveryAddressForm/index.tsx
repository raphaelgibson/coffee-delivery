import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormContainer,
  FixedLenInput,
  FlexLenInput,
  UFInput,
  InputsContainer,
  PaymentMethodContainer,
  InputsDescription,
  InputsGroup,
} from './styles'

export function DeliveryAddressForm() {
  const { register, setValue } = useFormContext()
  const [paymentMethod, setPaymentMethod] = useState('')

  function handleSetPaymentMethod(method: string) {
    setPaymentMethod(method)
    setValue('paymentMethod', method)
  }

  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>
      <div>
        <InputsContainer>
          <InputsDescription iconColor="yellow">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </InputsDescription>
          <InputsGroup>
            <FixedLenInput
              id="cep"
              placeholder="CEP"
              type="text"
              {...register('cep')}
            />
            <FlexLenInput
              id="street"
              placeholder="Rua"
              type="text"
              {...register('street')}
            />
            <div>
              <FixedLenInput
                id="number"
                placeholder="Número"
                type="text"
                {...register('number')}
              />
              <FlexLenInput
                id="complement"
                placeholder="Complemento"
                type="text"
                {...register('complement')}
              />
            </div>
            <div>
              <FixedLenInput
                id="neighborhood"
                placeholder="Bairro"
                type="text"
                {...register('neighborhood')}
              />
              <FlexLenInput
                id="city"
                placeholder="Cidade"
                type="text"
                {...register('city')}
              />
              <UFInput
                id="uf"
                placeholder="UF"
                className="fixedUFLengthInput"
                type="text"
                {...register('uf')}
              />
            </div>
          </InputsGroup>
        </InputsContainer>
        <InputsContainer>
          <InputsDescription iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </InputsDescription>
          <PaymentMethodContainer>
            <button
              type="button"
              className={
                paymentMethod === 'Cartão de Crédito' ? 'selected' : ''
              }
              onClick={() => handleSetPaymentMethod('Cartão de Crédito')}
            >
              <CreditCard size={16} />
              <span>cartão de crédito</span>
            </button>
            <button
              type="button"
              className={paymentMethod === 'Cartão de Débito' ? 'selected' : ''}
              onClick={() => handleSetPaymentMethod('Cartão de Débito')}
            >
              <Bank size={16} />
              <span>cartão de débito</span>
            </button>
            <button
              type="button"
              className={paymentMethod === 'Dinheiro' ? 'selected' : ''}
              onClick={() => handleSetPaymentMethod('Dinheiro')}
            >
              <Money size={16} />
              <span>dinheiro</span>
            </button>
            <input type="hidden" {...register('paymentMethod')} />
          </PaymentMethodContainer>
        </InputsContainer>
      </div>
    </FormContainer>
  )
}
