import styled from 'styled-components'
import Button from 'components/ui/Button'
import Card from 'components/ui/Card'
import Tag from 'components/vehicle/Tag'
import { Link } from 'react-router-dom'
import { Vehicle } from 'types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Image = styled.img`
  width: 300px;
  height: 168px;
`
const Title = styled.h2`
  font-weight: 700;
  margin: 0;
  padding-bottom: 0;
`
const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const Brand = styled.span`
  font-weight: 400;
`

const Description = styled.div`
  color: gray;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
`

const Price = styled.span`
  color: red;
`

const Tags = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const DetailsLink = styled(Link)`
  margin-top: 8px;
  align-self: flex-end;
`

interface VehicleCardProps {
  vehicle: Vehicle
}

function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card>
      <Wrapper>
        <Image src={vehicle.images[1]} alt={vehicle.title} />
        <Title>{vehicle.title}</Title>
        <Subtitle>
          <Brand>{vehicle.brand}</Brand>
          <Price>{vehicle.price}$</Price>
        </Subtitle>
        <Tags>
          {vehicle.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Description>{vehicle.description}</Description>
        <DetailsLink to={`/vehicles/${vehicle.id}`}>
          <Button>Details</Button>
        </DetailsLink>
      </Wrapper>
    </Card>
  )
}

export default VehicleCard
