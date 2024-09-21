import styled from 'styled-components'

const StyledTag = styled.div`
  background: lightgray;
  color: black;
  font-weight: 200;
  font-size: 14px;
  border-radius: 20px;
  padding: 2px 8px;
  width: fit-content;
`

interface TagProps {
  children: string
}

function Tag({ children }: TagProps) {
  return <StyledTag>{children}</StyledTag>
}

export default Tag
