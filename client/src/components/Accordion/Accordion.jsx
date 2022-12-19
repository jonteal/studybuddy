import AccordionCard from "../AccordionCard/AccordionCard";

import "./accordion.css";

const Accordion = ({ matchingIndexCards }) => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {matchingIndexCards.map((indexCard, index) => (
        <div key={indexCard.id} className="accordion-item" data-bs-toggle="collapse">
          <AccordionCard
            index={index}
            key={indexCard.id}
            indexCard={indexCard}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
