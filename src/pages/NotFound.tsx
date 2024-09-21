import Container from 'components/layout/Container'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container>
      <h1>404 Not Found</h1>
      <Link to="/">Home</Link>
    </Container>
  )
}

export default NotFound
