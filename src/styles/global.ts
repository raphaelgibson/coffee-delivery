import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-700']};
  }

  .bg-yellow-500 {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  .bg-yellow-700 {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  .bg-base-text {
    background-color: ${(props) => props.theme['base-text']};
  }

  .bg-purple-500 {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
