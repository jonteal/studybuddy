import React from 'react'

import './flippableCard.css';

const FlippableCard = ({ indexCard }) => {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {indexCard.title}
          </div>
          <div className="flip-card-back">
            {indexCard.description}
          </div>
        </div>
      </div>
  )
}

export default FlippableCard