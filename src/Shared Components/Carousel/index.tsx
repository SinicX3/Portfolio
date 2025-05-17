import { useState } from 'react'
import './sass-module.sass'

interface CarouselProps {
  img: string[]
}

function Carousel({ img }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1))
  }

  const next = () => {
    setIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1))
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
          {img.map((src, i) => (
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
