import React from 'react'

import ImgCar from '../../assets/img-car.jpg'

import { Container, Content } from './styles'

const Home: React.FC = () => {
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
          <input type="text" />
        </form>
      </Content>
    </Container>
  )
}

export default Home
