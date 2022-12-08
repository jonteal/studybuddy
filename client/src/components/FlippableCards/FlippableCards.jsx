import FlippableCard from "../FlippableCard/FlippableCard";
import "./flippableCards.css";

const FlippableCards = ({ matchingIndexCards }) => {

  return (
    <div className="flippable-card-container">
      {matchingIndexCards.map((indexCard, index) => (
        <div key={indexCard.id}>
          <FlippableCard
            index={index}
            key={indexCard.id}
            indexCard={indexCard}
          />
        </div>
      ))}
    </div>
  );
};

export default FlippableCards;
