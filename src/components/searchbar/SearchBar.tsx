import styled from 'styled-components'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import Badge from 'components/ui/Badge'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { tags } from 'utils/tags'
import { useDebounce } from 'hooks/useDebounce'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  justify-content: stretch;
`
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`

const Tags = styled.div`
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  gap: 8px;
`

type FormInputs = {
  title: string
}

interface SearchBarProps {
  selectedTags: string[]
  onSearchTermChange: (title: string) => void
  onTagChange: (tag: string) => void
}

function SearchBar({ selectedTags, onSearchTermChange, onTagChange }: SearchBarProps) {
  const { register, watch, reset } = useForm<FormInputs>()
  const title = watch('title')

  const debouncedSearch = useDebounce(onSearchTermChange, 600)

  useEffect(() => {
    debouncedSearch(title)
  }, [title])

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>Search by title</span>
        <InputWrapper>
          <Input placeholder="Enter title" {...register('title')} />
          <Button variant="gray" onClick={() => reset()}>
            Reset
          </Button>
          <Tags>
            {tags.map((tag) => (
              <Badge
                key={tag}
                isSelected={selectedTags.includes(tag)}
                onClick={() => onTagChange(tag)}
              >
                {tag[0].toUpperCase() + tag.slice(1, -1)}
              </Badge>
            ))}
          </Tags>
        </InputWrapper>
      </form>
    </Container>
  )
}

export default SearchBar
