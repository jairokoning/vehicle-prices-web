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
  &.Select.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent red;
  }
`
