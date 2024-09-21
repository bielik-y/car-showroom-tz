import Button from 'components/ui/Button'
import { useState } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 500px;

  @media (max-width: 500px) {
    width: 400px;
  }
`

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`

const SliderButton = styled(Button)`
  margin: 5px;
`

interface SliderProps {
  alt: string
  images: string[]
}

function ImageSlider({ images, alt }: SliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function changeImage(nextIndex: number) {
    setCurrentImageIndex(nextIndex)
  }

  function showNextImage() {
    const nextIndex = (currentImageIndex + 1) % images.length
    changeImage(nextIndex)
  }

  function showPrevImage() {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    changeImage(prevIndex)
  }

  return (
    <SliderContainer>
      <Image src={images[currentImageIndex]} alt={alt} />
      <div>
        <SliderButton variant="gray" onClick={showPrevImage}>
          Previous
        </SliderButton>
        <SliderButton variant="gray" onClick={showNextImage}>
          Next
        </SliderButton>
      </div>
    </SliderContainer>
  )
}

export default ImageSlider
