import styled from 'styled-components'
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
    padding: 30px 30px 0 30px;
    width: 540px;
    text-align: center;
    display: flex;
    flex-direction: column;

    div {
      /* border-radius: 0; */
    }
  }
`

export const MySelect = styled(Select)`
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
