import styled from 'styled-components'

export const HomeContainer = styled.div`
  section {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 5.75rem 10rem;
    gap: 3.5rem;

    .description {
      flex: 1;

      .description-texts {
        margin: 0.175rem 0 4.175rem;

        h1 {
          font-family: 'Baloo 2', cursive;
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.3;
          color: ${(props) => props.theme['base-title']};
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        p {
          font-family: 'Roboto', sans-serif;
          font-size: 1.25rem;
          line-height: 1.3;
          color: ${(props) => props.theme['base-subtitle']};
          margin-top: 1rem;
        }
      }

      .description-list-items {
        height: 5.25rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 1.25rem 2.5rem;
        margin-bottom: 1rem;

        .description-list-item {
          display: flex;
          gap: 0.75rem;
          align-items: center;

          div {
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 50%;
            color: ${(props) => props.theme.background};
          }

          span {
            font-family: 'Roboto', sans-serif;
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

  main {
    margin: 0 10rem 10rem;
    padding-top: 2rem;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 2.125rem;
    }

    .coffeeCardsList {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem 2rem;
    }
  }
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  text-align: center;
  line-height: 1.3;

  padding: 1.25rem;
  padding-top: 0;

  img {
    width: 7.5rem;
  }

  .coffeeTags {
    display: flex;
    margin: 0.75rem 0 1rem;
    gap: 0.25rem;

    span {
      color: ${(props) => props.theme['yellow-700']};
      background-color: ${(props) => props.theme['yellow-300']};
      border-radius: 100px;
      padding: 0.25rem 0.5rem;
      max-width: 5rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: capitalize;
  }

  .coffeeDescription {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    margin: 0.5rem 0 2rem;
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      color: ${(props) => props.theme['base-text']};
      margin-right: 0.875rem;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      span {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
      }
    }

    div {
      width: 4.5rem;
      display: flex;
      justify-content: space-between;
      background-color: ${(props) => props.theme['base-button']};

      border-radius: 6px;
      padding: 0.75rem 0.5rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;

      button {
        display: flex;
        align-items: center;
        background-color: transparent;
        color: ${(props) => props.theme['purple-500']};
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;

        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme['purple-700']};
        }
      }

      span {
        color: ${(props) => props.theme['base-title']};
      }
    }

    button[type='submit'] {
      color: ${(props) => props.theme['base-card']};
      background-color: ${(props) => props.theme['purple-700']};

      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
