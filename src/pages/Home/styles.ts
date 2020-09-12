import styled from 'styled-components'
import { shade } from 'polished'
import Select from 'react-select'

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;

    background: #000;

    div {
      display: flex;

      div {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        font-family: 'Playfair Display', serif;

        h1 {
          font-size: 700;
        }
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -120px auto;
  width: 100%;

  form {
    background: #fff;
    margin: 80px 0;

    width: 540px;
    text-align: center;
    display: flex;
    flex-direction: column;

    > div {
      padding: 30px 30px 0 30px;
    }

    > button {
      height: 30px;
      width: 100%;
      background: #d92b38;
      color: #808080;
      border: none;
      font-weight: 700;
      transition: background-color 0.2s;
    }

    > button:hover {
      background: ${shade(0.2, '#d92b38')};
    }
  }
`

export const CarType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 30px 0;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 140px;
    border: none;
    border-radius: 8px;
    background: #db2e2e;
    transition: background-color 0.2s;
  }

  button:hover {
    background: ${shade(0.2, '#db2e2e')};
  }

  button:focus {
    background: #000000;
    color: #808080;
    font-weight: 700;
  }
`

export const MySelect = styled(Select)`
  margin-bottom: 30px;

  div {
    border-radius: 0;
  }

  /* &.react-select .Select__control Select__control--is-focused {
    border-color: red !important;
  } */

  &.react-select .Select__control--is-focused {
    border-color: #868686 !important;
    box-sizing: none;
    box-shadow: 0 0 0 0px #868686;
  }
`
