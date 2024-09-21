import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px;
  margin: 0, 16px;
  max-width: 300px;
`
interface CardProps {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return <CardContainer>{children}</CardContainer>
}

export default Card
