import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;
  padding: 0 10rem;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 0.25rem 0 2.5rem;
  }

  section {
    display: flex;
    gap: 6.375rem;

    & > div:first-child {
      padding: 1px;
      margin: 1.375rem 0;
      border-radius: 7px 37px 7px 37px;
      background-image: linear-gradient(
        90deg,
        ${(props) => props.theme['yellow-500']} 0%,
        ${(props) => props.theme['purple-500-07']} 100%
      );
    }

    .deliveryData {
      background-color: ${(props) => props.theme.background};
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.5rem;
      border-radius: 6px 36px 6px 36px;

      .deliveryDataItem {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        div {
          &:first-child {
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 50%;
            color: ${(props) => props.theme.background};
          }

          display: flex;
          flex-direction: column;

          span {
            line-height: 1.3;
            font-family: 'Roboto', sans-serif;
            color: ${(props) => props.theme['base-text']};
          }
        }
      }
    }

    .image {
      flex: 1;
      display: flex;
      justify-content: right;
    }
  }
`
