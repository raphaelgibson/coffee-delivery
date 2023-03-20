import styled from 'styled-components'

export const FormContainer = styled.section`
  min-width: 40rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
`

const INPUT_DESCRIPTION_COLORS = {
  yellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface InputsDescriptionProps {
  iconColor: keyof typeof INPUT_DESCRIPTION_COLORS
}

export const InputsDescription = styled.div<InputsDescriptionProps>`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme[INPUT_DESCRIPTION_COLORS[props.iconColor]]};

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    font-family: 'Roboto', sans-serif;
    line-height: 1.3;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    display: none;
  }

  button {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['purple-500']};

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    &.selected {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme['purple-500']};
      background-color: ${(props) => props.theme['purple-300']};
    }

    span {
      color: ${(props) => props.theme['base-text']};
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 1.6;
    }
  }
`

export const FixedLenInput = styled.input`
  width: 12.5rem;
`

export const UFInput = styled.input`
  width: 3.75rem;
`

export const FlexLenInput = styled.input`
  flex: 1;
`
