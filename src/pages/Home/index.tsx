import React from 'react'
import {
  FaCarSide,
  FaMotorcycle,
  FaTruck,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

import ImgCar from '../../assets/img-car.jpg'

import {
  Container,
  Content,
  CarType,
  MySelect,
  VehicleInfoContent,
  PriceContent,
  ReferenceContent,
  Footer,
} from './styles'

const Home: React.FC = () => {
  const brands = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
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
          <div>
            <h3>LET&apos;S FIND YOUR VEHICLE PRICE</h3>
            <CarType>
              <button type="button">
                <span>
                  <FaCarSide size={32} />
                </span>
                Cars
              </button>
              <button type="button">
                <span>
                  <FaMotorcycle size={32} />
                </span>{' '}
                Motorcycles
              </button>
              <button type="button">
                <span>
                  <FaTruck size={32} />
                </span>
                Trucks
              </button>
            </CarType>
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Brands..."
              options={brands}
            />
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Vehicles..."
              options={brands}
            />
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Years..."
              options={brands}
            />
          </div>
          <button type="button">Search</button>
        </form>
        <VehicleInfoContent>
          <PriceContent>
            <p>Price</p>
            <hr />
            <h2>R$ 148.000,00</h2>
          </PriceContent>
          <ReferenceContent>
            <p>Reference</p>
            <hr />
            <h2>setembro 2020</h2>
          </ReferenceContent>
        </VehicleInfoContent>
        <Footer>
          <a href="https://www.linkedin.com/in/jairokoning/">
            <FaLinkedin />
            Linkedin
          </a>

          <a href="https://github.com/jairokoning">
            <FaGithub /> Github
          </a>
        </Footer>
      </Content>
    </Container>
  )
}

export default Home
