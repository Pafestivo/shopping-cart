import React, { useEffect, useState } from "react"
import '../styles/slideshow.css'

const SlideShow = ({ images, itemName }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [activeCircleIndex, setActiveCircleIndex] = useState(0)
  const [loading, setLoading] = useState(true)

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
    if(currentIndex === 0) {
      setCurrentIndex(images.length - 1)
      setActiveCircleIndex(images.length - 1)
    }
    else {
      setCurrentIndex(currentIndex - 1)
      setActiveCircleIndex(currentIndex - 1)
    }
    
  }

  const showNext = () => {
    if(currentIndex === images.length - 1) {
      setCurrentIndex(0)
      setActiveCircleIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
      setActiveCircleIndex(currentIndex + 1)
    }
  }
  
  const handleCircleClick = (index) => {
    setCurrentIndex(index)
    setActiveCircleIndex(index)
  }

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <div className="slider">
      {images.length > 1 ? (
        <div className="slider">
          <p className="prevArrow" onClick={showPrevious}>❰</p>
          <img src={images[currentIndex]} alt={itemName} onClick={displayImage} onLoad={handleImageLoad} />
          <p className="nextArrow" onClick={showNext}>❱</p>

          {/* while waiting for image, show loading */}
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            null
          )}
        </div>
      ) : (
        <img src={images[currentIndex]} alt={itemName} onClick={displayImage} onLoad={handleImageLoad} />
      )}
      <div className="circles-container">
        {images.map((image, index) => {
          return(
            <div
            key = {index}
            className={index === activeCircleIndex ? "circle active": "circle"}
            onClick={() => handleCircleClick(index)}
            />
          ) 
        })}
      </div>

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