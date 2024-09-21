import styled from 'styled-components'
import { Review, Vehicle } from 'types'
import ImageSlider from 'components/vehicle/ImageSlider'
import Tag from 'components/vehicle/Tag'
import ReviewList from 'components/review/ReviewList'
import { useEffect, useState } from 'react'
import AddReview, { FormInputs } from 'components/review/AddReview'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

const Card = styled.div`
  max-width: 1000px;
  //flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px 20px;
  margin: 8px 16px;

  @media (max-width: 1340px) {
    flex-direction: column;
    gap: 8px;
  }
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`
const Brand = styled.span`
  font-weight: 400;
`

const Description = styled.div`
  color: gray;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Price = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: red;
`

const Characteristics = styled.span`
  display: flex;
  gap: 4px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Name = styled.span`
  font-weight: 600;
`

const Value = styled.span`
  font-weight: 300;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  gap: 4px;
`

const StyledTitle = styled(Title)`
  font-size: 24px;
  font-weight: 600;
  margin: 8px 0px;
  padding-left: 16px;
`

interface VehicleDetailProps {
  vehicle: Vehicle
}

function VehicleDetails({ vehicle }: VehicleDetailProps) {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (vehicle !== undefined) {
      const allReviews: (Review & { vehicleId: string })[] = JSON.parse(
        localStorage.getItem('reviews') || '[]'
      )
      const vehicleReviews = allReviews
        .filter((review) => Number(review.vehicleId) === vehicle.id)
        .map((review) => ({
          reviewerName: review.reviewerName,
          reviewerEmail: review.reviewerEmail,
          date: review.date,
          comment: review.comment,
          rating: review.rating
        }))
      setReviews([...vehicle.reviews, ...vehicleReviews])
    }
  }, [vehicle])

  function handleAddReviewSubmit(review: FormInputs) {
    console.log(review)
    const newReview: Review = {
      reviewerName: review.name,
      reviewerEmail: review.email,
      rating: Number(review.rating),
      comment: review.comment,
      date: new Date().toISOString()
    }
    const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]')
    const updatedReviews = [...existingReviews, { ...newReview, vehicleId: vehicle.id }]
    localStorage.setItem('reviews', JSON.stringify(updatedReviews))
    setReviews((reviews) => [...reviews, newReview])
  }

  return (
    <Container>
      <Card>
        <ImageSlider images={vehicle.images} alt={vehicle.title} />
        <Side>
          <Title>
            <h1>{vehicle.title}</h1>
            <Price>{vehicle.price}$</Price>
          </Title>
          <Brand>{vehicle.brand}</Brand>
          <Description>{vehicle.description}</Description>
          <Tags>
            {vehicle.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Characteristics>
            <Name>Discount Percentage:</Name>
            <Value>-{Math.round(vehicle.discountPercentage)}%</Value>
          </Characteristics>
          <Characteristics>
            <Name>Brand:</Name>
            <Value>{vehicle.brand}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Depth:</Name>
            <Value>{vehicle.dimensions.depth}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Width:</Name>
            <Value>{vehicle.dimensions.width}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Height:</Name>
            <Value>{vehicle.dimensions.height}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Availability Status:</Name>
            <Value>{vehicle.availabilityStatus}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Minimum Order Quantity:</Name>
            <Value>{vehicle.minimumOrderQuantity}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Shipping Information:</Name>
            <Value>{vehicle.shippingInformation}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Category:</Name>
            <Value>{vehicle.category}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Tags:</Name>
            {vehicle.tags.map((tag) => (
              <Value key={tag}>{tag}</Value>
            ))}
          </Characteristics>
          <Characteristics>
            <Name>Rating:</Name>
            <Value>{vehicle.rating}</Value>
          </Characteristics>
          <Characteristics>
            <Name>Warranty Information:</Name>
            <Value>{vehicle.warrantyInformation}</Value>
          </Characteristics>
          <Characteristics>
            <Name>SKU:</Name>
            <Value>{vehicle.sku}</Value>
          </Characteristics>
        </Side>
      </Card>
      <StyledTitle>Reviews</StyledTitle>
      <ReviewList reviews={reviews} />
      <StyledTitle>Send review</StyledTitle>
      <AddReview onReviewSubmit={handleAddReviewSubmit}></AddReview>
    </Container>
  )
}

export default VehicleDetails
