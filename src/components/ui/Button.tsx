import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ $variant: string }>`
  background-color: ${(props) => (props.$variant === 'blue' ? '#486af0' : '#c6c7cc')};
  color: white;
  transition: all 0.3s;
  outline: none;
  border: none;
  padding: 8px 20px;
  height: fit-content;

  &:hover {
    background-color: ${(props) => (props.$variant === 'blue' ? ' #3351c4' : '#acadb0')};
  }

  &:active {
    background-color: ${(props) => (props.$variant === 'blue' ? '#2947ba' : '#98999e')};
  }
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'gray'
  children: React.ReactNode
}

function Button({ children, variant = 'blue', ...props }: ButtonProps) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
