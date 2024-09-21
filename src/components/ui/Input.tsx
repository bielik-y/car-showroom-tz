import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 16px;
  margin: 4px 0;
  outline: none;
  padding: 12px 10px;
  border: 1px solid lightgray;
  border-radius: 6px;

  &:focus {
    box-shadow: 0px 0px 5px rgba(109, 106, 241, 0.4);
  }
`

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return <StyledInput ref={ref} {...props} />
  }
)

Input.displayName = 'Input'

export default Input
