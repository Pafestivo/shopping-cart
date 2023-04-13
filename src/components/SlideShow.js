import React, { useEffect, useState } from "react"
import '../styles/slideshow.css'

const SlideShow = ({ images, itemName }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [overlayVisible, setOverlayVisible] = useState(false)


  useEffect(() => {
    if(currentIndex < 0) {
      setCurrentIndex(images.length - 1)
    }
    else if(currentIndex >= images.length) {
      setCurrentIndex(0)
    }
  }, [currentIndex, images.length])

  // close the overlay on window click
  useEffect(() => {
    if(overlayVisible) {
      window.addEventListener("click", closeDisplay)

      return () => {
        window.removeEventListener("click", closeDisplay);
      }
    }
  }, [overlayVisible])

  const displayImage = () => {
    setOverlayVisible(true)
  }

  const closeDisplay = (e) => {
    if (e.target.tagName !== 'IMG') setOverlayVisible(false)
  }

  const showPrevious = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const showNext = () => {
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="slider">
      {images.length > 1 ? (
        <div className="slider">
          <p className="prevArrow" onClick={showPrevious}>❰</p>
          <img src={images[currentIndex]} alt={itemName} onClick={displayImage} />
          <p className="nextArrow" onClick={showNext}>❱</p>
        </div>
      ) : (
        <img src={images[currentIndex]} alt={itemName} onClick={displayImage} />
      )}


      {overlayVisible && (
        
        <div className="overlay-image">
          <div className="relative-element">
            <div className="close" onClick={(e) => closeDisplay(e)}>X</div>
            <img src={images[currentIndex]} alt={itemName} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SlideShow