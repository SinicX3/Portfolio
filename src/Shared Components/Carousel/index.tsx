import { useState } from 'react'
import './sass-module.sass'

interface CarouselProps {
  images: string[]
}

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const next = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="carousel">
      <button className="carousel__btn left" onClick={prev}>
        ‹
      </button>
      <div className="carousel__window">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            console.log(src),
            <img key={i} src={src} alt={`Slide ${i}`} className="carousel__img" />
          ))}
        </div>
      </div>
      <button className="carousel__btn right" onClick={next}>
        ›
      </button>
    </div>
  )
}

export default Carousel
