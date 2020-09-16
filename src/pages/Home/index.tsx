import React, { FormEvent, useCallback, useState } from 'react'
import {
  FaCarSide,
  FaMotorcycle,
  FaTruck,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

import ImgCar from '../../assets/img-car.jpg'
import api from '../../servives/api'

import {
  Container,
  Content,
  CarType,
  ButtonCarType,
  MySelect,
  VehicleInfoContent,
  PriceContent,
  ReferenceContent,
  Footer,
} from './styles'

interface Brand {
  codigo: number
  nome: string
}

interface Model {
  codigo: number
  nome: string
}

interface Year {
  codigo: number
  nome: string
}

interface VehicleInfo {
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  TipoVeiculo: number
  SiglaCombustivel: string
}

const Home: React.FC = () => {
  const [selectedType, setSelectedType] = useState('')
  const [brands, setBrands] = useState([])
  const [selectedBrand, setSelectedBrand] = useState('')
  const [models, setModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('')
  const [years, setYears] = useState([])
  const [selectedYear, setSelectedYear] = useState('')
  const [vehicleInfo, setVehicleInfo] = useState({} as VehicleInfo)

  const handleVehicleType = useCallback(
    async type => {
      if (type === selectedType) {
        return
      }

      setSelectedType(type)

      const response = await api.get(`${type}/marcas`)

      setBrands(
        response.data.map((brand: Brand) => {
          return {
            value: brand.codigo,
            label: brand.nome,
          }
        })
      )

      setSelectedBrand('')
      setSelectedModel('')
      setModels([])
      setSelectedYear('')
      setYears([])
      setVehicleInfo({} as VehicleInfo)
    },
    [selectedType]
  )

  const handleVehicleBrand = useCallback(
    async event => {
      const brand = event.value

      if (brand === selectedBrand) {
        return
      }

      const response = await api.get(`${selectedType}/marcas/${brand}/modelos`)

      setModels(
        response.data.modelos.map((model: Model) => {
          return {
            value: model.codigo,
            label: model.nome,
          }
        })
      )

      setSelectedBrand(brand)
      setSelectedModel('')
      setSelectedYear('')
      setYears([])
      setVehicleInfo({} as VehicleInfo)
    },
    [selectedType, selectedBrand]
  )

  const handleVehicleModel = useCallback(
    async event => {
      const model = event.value

      if (model === selectedModel) {
        return
      }

      const response = await api.get(
        `${selectedType}/marcas/${selectedBrand}/modelos/${model}/anos`
      )

      setYears(
        response.data.map((year: Year) => {
          return {
            value: year.codigo,
            label: year.nome,
          }
        })
      )

      setSelectedModel(model)
      setSelectedYear('')
      setVehicleInfo({} as VehicleInfo)
    },
    [selectedType, selectedBrand, selectedModel],
  )

  const handleVehicleYear = useCallback(
    async event => {
      const year = event.value

      if (year === selectedYear) {
        return
      }

      setSelectedYear(year)
      setVehicleInfo({} as VehicleInfo)
    },
    [selectedYear]
  )

  const handleSearchPrice = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      const response = await api.get(
        `${selectedType}/marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`,
      )

      setVehicleInfo(response.data)
    },
    [selectedType, selectedBrand, selectedModel, selectedYear]
  )

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
        <form onSubmit={handleSearchPrice}>
          <div>
            <h3>LET&apos;S FIND YOUR VEHICLE PRICE</h3>
            <CarType>
              <ButtonCarType
                type="button"
                selected={selectedType === 'carros'}
                onClick={() => handleVehicleType('carros')}
              >
                <span>
                  <FaCarSide size={32} />
                </span>
                Cars
              </ButtonCarType>
              <ButtonCarType
                type="button"
                selected={selectedType === 'motos'}
                onClick={() => handleVehicleType('motos')}
              >
                <span>
                  <FaMotorcycle size={32} />
                </span>{' '}
                Motorcycles
              </ButtonCarType>
              <ButtonCarType
                type="button"
                selected={selectedType === 'caminhoes'}
                onClick={() => handleVehicleType('caminhoes')}
              >
                <span>
                  <FaTruck size={32} />
                </span>
                Trucks
              </ButtonCarType>
            </CarType>
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Brands..."
              value={
                brands.find((obj: any) => obj.value === selectedBrand) || ''
              }
              options={brands}
              onChange={(event: any) => handleVehicleBrand(event)}
            />
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Vehicles..."
              value={
                models.find((obj: any) => obj.value === selectedModel) || ''
              }
              options={models}
              onChange={(event: any) => handleVehicleModel(event)}
            />
            <MySelect
              classNamePrefix={'Select'}
              className="react-select"
              placeholder="Years..."
              options={years}
              value={years.find((obj: any) => obj.value === selectedYear) || ''}
              onChange={(event: any) => handleVehicleYear(event)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <VehicleInfoContent>
          <PriceContent>
            <p>Price</p>
            <hr />
            <h2>{vehicleInfo.Valor ? vehicleInfo.Valor : 'R$ - - - - -'}</h2>
          </PriceContent>
          <ReferenceContent>
            <p>Reference</p>
            <hr />
            <h2>
              {vehicleInfo.MesReferencia
                ? vehicleInfo.MesReferencia
                : '- - - - - -'}
            </h2>
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
