import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin: 2.5rem 10rem;

  form {
    display: flex;
    justify-content: space-between;

    .cartResume {
      min-width: 28rem;

      h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        font-weight: 700;
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        padding: 2.5rem;
        margin-top: 1rem;

        .coffeeCard {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid ${(props) => props.theme['base-button']};

          & > div {
            display: flex;
            gap: 1.25rem;

            img {
              width: 4rem;
            }

            .coffeeDescription {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              font-family: 'Roboto', sans-serif;
              font-size: 1rem;
              line-height: 1.3;

              .amountControl {
                display: flex;
                gap: 0.5rem;

                div {
                  display: flex;
                  align-items: center;
                  gap: 0.25rem;
                  padding-right: 0.5rem;
                  padding-left: 0.5rem;

                  border-radius: 6px;
                  background-color: ${(props) => props.theme['base-button']};

                  button {
                    display: flex;
                    background-color: transparent;
                    color: ${(props) => props.theme['purple-500']};
                    border: 0;

                    cursor: pointer;

                    &:hover {
                      color: ${(props) => props.theme['purple-700']};
                    }
                  }
                }

                .removeAmount {
                  display: flex;
                  align-items: center;
                  gap: 0.25rem;
                  padding: 0.5rem;

                  border: none;
                  border-radius: 6px;
                  background-color: ${(props) => props.theme['base-button']};

                  color: ${(props) => props.theme['purple-500']};

                  cursor: pointer;
                  transition: 0.2s;

                  &:hover {
                    background-color: ${(props) => props.theme['base-hover']};
                  }

                  span {
                    color: ${(props) => props.theme['base-text']};
                    text-transform: uppercase;
                    font-family: 'Roboto', sans-serif;
                    font-size: 0.75rem;
                    line-height: 1.6;
                  }
                }
              }
            }
          }

          & > span {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.3;
            color: ${(props) => props.theme['base-text']};
          }
        }
      }

      .costResume {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        div {
          display: flex;
          justify-content: space-between;
          font-family: 'Roboto', sans-serif;
          font-size: 0.875rem;
          line-height: 1.3;
          color: ${(props) => props.theme['base-text']};

          &:last-child {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${(props) => props.theme['base-subtitle']};
          }
        }
      }

      button[type='submit'] {
        width: 100%;
        padding: 0.75rem;
        border: 0;
        border-radius: 6px;
        background-color: ${(props) => props.theme['yellow-500']};

        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.3;
        text-transform: uppercase;
        color: ${(props) => props.theme.white};

        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background-color: ${(props) => props.theme['yellow-700']};
        }
      }
    }
  }
`
