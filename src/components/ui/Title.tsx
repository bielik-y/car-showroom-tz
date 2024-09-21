import styled from 'styled-components'

interface TitleProps {
  children: string
}

const StyledTitle = styled.h1`
  margin: 16px 0;
  font-weight: 800;
  font-size: 34px;
`

function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
