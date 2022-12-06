import { useState, useEffect } from "react";
import ConfidenceBadge from "../ConfidenceBadge/ConfidenceBadge";
import { cardOptions } from '../../utils/cardOptions';

import './accordionCard.css';

const AccordionCard = ({ indexCard, index }) => {

  const [statusColor, setStatusColor] = useState('')

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
    <div>
      <h2
        className="accordion-header"
        id={`panelsStayOpen-heading${cardOptions[index]}`}
      >
        <button
          className={`accordion-button ${statusColor}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${cardOptions[index]}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${cardOptions[index]}`}
        >
          {indexCard.title}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${cardOptions[index]}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-heading${cardOptions[index]}`}
      >
        <div className="accordion-body">
          <p>{indexCard.description}</p>
          <ConfidenceBadge
            statusColor={statusColor}
            indexCard={indexCard}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
