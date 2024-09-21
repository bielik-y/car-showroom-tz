import styled from 'styled-components'
import { Review as UserReview } from 'types'
import Review from 'components/review/Review'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface ReviewListProps {
  reviews: UserReview[]
}
function ReviewList({ reviews }: ReviewListProps) {
  return (
    <Container>
      {reviews.map((review) => (
        <Review key={review.reviewerEmail} review={review} />
      ))}
    </Container>
  )
}

export default ReviewList
