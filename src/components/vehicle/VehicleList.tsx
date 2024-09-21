import styled from 'styled-components'
import { Vehicle } from 'types'
import VehicleCard from 'components/vehicle/VehicleCard'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
  }
`

interface VehicleListProps {
  vehicles: Vehicle[]
}
function VehicleList({ vehicles }: VehicleListProps) {
  if (!vehicles.length) return <p>No vehicles found</p>

  return (
    <Container>
      {vehicles.map((item) => (
        <VehicleCard key={item.id} vehicle={item} />
      ))}
    </Container>
  )
}

export default VehicleList
