import styled from 'styled-components'
import { Review as UserReview } from 'types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px 20px;
  max-width: 1000px;
  margin: 8px 16px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.span`
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const Comment = styled.span`
  color: gray;
  font-weight: 300;
`

const Rating = styled.span`
  color: black;
`

const Date = styled.span`
  color: gray;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`

interface ReviewProps {
  review: UserReview
}

function Review({ review }: ReviewProps) {
  return (
    <Container>
      <Header>
        <Name>{review.reviewerName}</Name>
        <Date>{review.date.slice(0, 10)}</Date>
      </Header>
      <Rating> ★ {review.rating}</Rating>
      <Comment>{review.comment}</Comment>
    </Container>
  )
}

export default Review
