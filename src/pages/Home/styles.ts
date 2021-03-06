import styled, { css } from 'styled-components'
import { shade } from 'polished'
import Select from 'react-select'

interface ButtonProps {
  selected: boolean
}

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: column;
    background: #000;

    div.title {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      height: 100px;
      margin-top: 10px;
      font-family: 'Playfair Display', serif;
      color: #424242;
    }

    div.image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (min-width: 1100px) {
    header {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;

      div.title {
        flex: 1;
        max-width: 40%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        font-family: 'Playfair Display', serif;
      }

      div.image {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
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
    margin: 80px 0 20px 0;
    width: 340px;
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
      color: #c4c4c4;
      border: none;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    > button:hover {
      background: ${shade(0.2, '#d92b38')};
    }
  }

  @media (min-width: 700px) {
    form {
      width: 440px;
    }
  }

  @media (min-width: 1100px) {
    form {
      width: 540px;
    }
  }
`

export const CarType = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  margin: 0 0 30px 0;

  /* button {
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
    background: ${shade(
    0.2,
    '#db2e2e',
  )};
  }

  button:focus {
    background: #000000;
    color: #808080;
    font-weight: 700;
  } */

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 0 0 30px 0;
  }
`

export const ButtonCarType = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #db2e2e;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#db2e2e')};
  }

  ${props =>
    props.selected &&
    css`
      background: #1c1c1c;
      color: #808080;
      font-weight: 700;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#1c1c1c')};
      }
    `}

  svg {
    margin-right: 5px;
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 140px;
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

export const VehicleInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 340px;

  /* background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(208, 208, 208, 1) 80%,
    rgba(187, 187, 187, 1) 100%
  ); */

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 440px;
    padding: 20px 0;
  }

  @media (min-width: 1100px) {
    width: 540px;
  }
`
export const PriceContent = styled.div`
  margin-bottom: 20px;
  border-left: 2px solid #5c5c5b;
  padding-left: 5px;
`

export const ReferenceContent = styled.div`
  margin-bottom: 20px;
  border-left: 2px solid #5c5c5b;
  padding-left: 5px;
`

export const ApiInfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 20px 20px;
  font-size: 14px;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #303030;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 30px;
  background: #000;

  a {
    text-decoration: none;
    color: #303030;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`
