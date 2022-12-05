import React from "react";

const Accordion = ({ matchingIndexCards }) => {
  console.log("matchingIndexCards: ", matchingIndexCards);

  const cardOptions = [
    'One',
    'Two',
    'Three'
  ]
  
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {matchingIndexCards.map((indexCard, index) => (
        <div key={indexCard.id} className="accordion-item">
          <h2 className="accordion-header" id={`panelsStayOpen-heading${cardOptions[index]}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${cardOptions[index]}`}
              aria-expanded="true"
              aria-controls={`panelsStayOpen-collapse${cardOptions[index]}`}
            >
              {matchingIndexCards[index].title}
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${cardOptions[index]}`}
            className="accordion-collapse collapse show"
            aria-labelledby={`panelsStayOpen-heading${cardOptions[index]}`}
          >
            <div className="accordion-body">
              <p>{matchingIndexCards[index].description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
