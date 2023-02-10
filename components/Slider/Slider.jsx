import { SliderData } from "./SliderData"
import { useState } from "react"
import Image from "next/image"
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return(
    <div id='gallery' className="max-w-[1240px] mx-auto pt-20">
      <h1 className="text-2xl font-bold text-center p-4">گالری</h1>
      
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-100 ease-in duration-1000' : 'opacity-0'}>

              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[48%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              <div className="relative">
                {index === current &&
                  <Image
                  className="aspect-[18/8]"
                  style={{objectFit:"cover"}}
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                />}
              </div>
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[48%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          )
        })}
      </div>
     </div>
  )
}

export default Slider