import React from 'react'

const FlippableCard = ({ indexCard }) => {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            Hello
          </div>
          <div className="flip-card-back">
            Goodbye
          </div>
        </div>
      </div>
  )
}

export default FlippableCard