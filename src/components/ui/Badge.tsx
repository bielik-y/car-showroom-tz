import styled from 'styled-components'

const StyledBadge = styled.div<{ $isSelected: boolean }>`
  background-color: ${(props) => (props.$isSelected ? '#486af0' : 'white')};
  color: ${(props) => (props.$isSelected ? 'white' : 'black')};
  border: ${(props) => (props.$isSelected ? '1px solid #486af0' : '1px solid #94a7f2')};
  border-radius: 20px;
  padding: 2px 8px;
  transition: 0.3s;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isSelected ? '#486af0' : '#c2cbed')};
  }
`

const Text = styled.span``

interface BadgeProps {
  isSelected: boolean
  children: React.ReactNode
  onClick?: () => void
}

function Badge({ isSelected, children, onClick }: BadgeProps) {
  return (
    <StyledBadge $isSelected={isSelected} onClick={onClick}>
      <Text>{children}</Text>
    </StyledBadge>
  )
}

export default Badge
