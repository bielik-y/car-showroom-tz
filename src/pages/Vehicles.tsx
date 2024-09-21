import styled from 'styled-components'
import Container from 'components/layout/Container'
import VehicleDetails from 'components/vehicle/VehicleDetails'
import { VehicleContext } from 'context/VehicleContext'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Vehicle } from 'types'

const HomeLink = styled(Link)`
  font-weight: 400;
`

function Vehicles() {
  const [vehicle, setVehicle] = useState<Vehicle>()
  const { vehicleId } = useParams<{ vehicleId: string }>()

  const vehicleContext = useContext(VehicleContext)
  const vehicles = vehicleContext?.vehicles

  useEffect(() => {
    if (vehicleId && vehicles) {
      const foundVehicle = vehicles.find((item) => item.id === Number(vehicleId))
      setVehicle(() => (foundVehicle ? { ...foundVehicle } : undefined))
    }
  }, [vehicleId, vehicleContext])

  if (!vehicle) {
    return <p>Loading vehicle...</p>
  }

  return (
    <Container>
      <HomeLink to="/">← Show all products</HomeLink>
      <VehicleDetails vehicle={vehicle} />
    </Container>
  )
}

export default Vehicles
