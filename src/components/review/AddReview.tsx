import styled from 'styled-components'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px 20px;
  max-width: 1000px;
  margin: 8px 16px;
  margin-bottom: 60px;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Error = styled.span`
  line-height: 16px;
  font-size: 16px;
  color: red;
  margin-bottom: 8px;
`

const Group = styled.span`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 8px;
`

const SendButton = styled(Button)`
  margin: 8px 0;
  justify-self: flex-end;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export type FormInputs = {
  name: string
  email: string
  comment: string
  rating: string
}

interface AddReviewProps {
  onReviewSubmit: (data: FormInputs) => void
}

function AddReview({ onReviewSubmit }: AddReviewProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    onReviewSubmit(data)
    reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <InputField>
            <span>Name</span>
            <Input
              placeholder="Enter name"
              {...register('name', { required: true, maxLength: 30 })}
            />
            {errors.name?.type === 'required' && <Error>Name is required</Error>}
            {errors.name?.type === 'maxLength' && <Error>Max length is 30 characters</Error>}
          </InputField>
          <InputField>
            <span>Email</span>
            <Input
              placeholder="Enter email"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email?.type === 'required' && <Error>Email is required</Error>}
          </InputField>
        </Group>
        <InputField>
          <span>Comment</span>
          <Input
            placeholder="Enter comment"
            {...register('comment', { required: true, maxLength: 80 })}
          />
          {errors.comment?.type === 'required' && <Error>Text is required</Error>}
          {errors.comment?.type === 'maxLength' && <Error>Max length is 80 characters</Error>}
        </InputField>
        <InputField>
          <span>Rating (from 1 to 5)</span>
          <Input type="number" max={5} min={1} {...register('rating', { required: true })} />
          {errors.rating?.type === 'required' && <Error>Number from 1 to 5 is required</Error>}
        </InputField>
        <SendButton type="submit">Send comment</SendButton>
      </form>
    </Container>
  )
}

export default AddReview
