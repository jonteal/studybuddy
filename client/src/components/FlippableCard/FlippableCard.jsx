import { useState } from "react";
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import ConfidenceBadge from '../ConfidenceBadge/ConfidenceBadge';

import "./flippableCard.css";

const FlippableCard = ({ indexCard }) => {
  const [statusColor, setStatusColor] = useState('');
  const [flipCardClass, setFlipCardClass] = useState('');
  const [flipCardInnerClass, setFlipCardInnerClass] = useState('');
  
  const handleClick = () => {
    if (flipCardClass === 'flip-card-click' && flipCardInnerClass === 'flip-card-inner-click') {
      setFlipCardClass('');
      setFlipCardInnerClass('')
    } else {
      setFlipCardClass('flip-card-click')
      setFlipCardInnerClass('flip-card-inner-click')
    }
  }

  useEffect(() => {
    if (indexCard.status === 'In the bag') {
      setStatusColor('in-the-bag');
    } else if (indexCard.status === 'Somewhat get') {
      setStatusColor('somewhat-get')
    } else if (indexCard.status === 'No clue') {
      setStatusColor('no-clue')
    }
  }, [indexCard.status])
  return (
    <div className='flip-card' onClick={handleClick}>
      <div className={`flip-card-inner ${statusColor}`} onClick={handleClick}>
        <div className="flip-card-front">{indexCard.title}</div>
        <div className="flip-card-back">
          <div className="flippable-card-link-container">
            <a
              className="btn btn-outline-info view-card-btn"
              href={`/indexCards/${indexCard.id}`}
            >
              {<FaEye />}
            </a>
          </div>
          <div className="flippable-card-description">{indexCard.description}</div>
          <div className="flippable-card-status">
            <ConfidenceBadge indexCard={indexCard} statusColor={statusColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
