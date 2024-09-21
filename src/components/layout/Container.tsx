import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 200px;
  margin-top: 32px;

  @media (max-width: 1200px) {
    margin: auto 80px;
  }

  @media (max-width: 768px) {
    margin: auto 20px;
  }
`
interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
