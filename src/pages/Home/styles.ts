import styled from 'styled-components'

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
  margin: -150px auto;

  width: 100%;
  background: #fff;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`
