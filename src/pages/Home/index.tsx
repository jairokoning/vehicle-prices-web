import React from 'react'
// import Select from 'react-select'

import ImgCar from '../../assets/img-car.jpg'

import { Container, Content, MySelect } from './styles'

const Home: React.FC = () => {
  const brands = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Container>
      <header>
        <div>
          <div>
            <h3>How much?</h3>
            <h1>Vehicle Prices</h1>
          </div>
          <img src={ImgCar} alt="Vehicle" />
        </div>
      </header>

      <Content>
        <form action="">
          <h3>LET&apos;S FIND YOUR VEHICLE PRICE</h3>
          <MySelect classNamePrefix={'Select'} options={brands} />
        </form>
      </Content>
    </Container>
  )
}

export default Home
