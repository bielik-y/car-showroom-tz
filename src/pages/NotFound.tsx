import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound
