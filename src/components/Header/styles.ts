import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  a:focus {
    box-shadow: none;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    div,
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 6px;

      padding: 0.5rem;

      font-family: 'Roboto', sans-serif;
      line-height: 1.3;
    }

    div {
      gap: 0.25rem;
      color: ${(props) => props.theme['purple-700']};
      background-color: ${(props) => props.theme['purple-300']};

      span {
        font-size: 0.875rem;
      }
    }

    a {
      color: ${(props) => props.theme['yellow-700']};
      background-color: ${(props) => props.theme['yellow-300']};
      position: relative;

      div {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        right: -0.5rem;
        top: -0.5rem;

        border-radius: 50%;
        background-color: ${(props) => props.theme['yellow-700']};

        color: ${(props) => props.theme.white};
        font-size: 0.75rem;
        font-weight: bold;
        letter-spacing: -0.06em;
      }
    }
  }
`
