import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import Spinner from "../../components/Spinner/Spinner";
import Accordion from "../../components/Accordion/Accordion";
import FlippableCards from "../../components/FlippableCards/FlippableCards";
import { FaClipboardList, FaRegMap } from "react-icons/fa";

import "./subject.css";

const Subject = () => {
  const [flashCardMode, setFlashCardMode] = useState(true);
  const { id } = useParams();

  const {
    loading: subjectLoading,
    error: subjectError,
    data: subjectData,
  } = useQuery(GET_SUBJECT, {
    variables: { id },
  });

  const {
    loading: indexCardLoading,
    error: indexCardError,
    data: indexCardData,
  } = useQuery(GET_INDEX_CARDS);

  if (subjectLoading || indexCardLoading) return <Spinner />;
  if (subjectError || indexCardError) return <p>Something went wrong!</p>;

  const subjectId = subjectData.subject.id;
  const indexCardArray = indexCardData.indexCards;

  const matchingIndexCards = indexCardArray.filter(
    (card) => card.subject.id === subjectId
  );

  return (
    <div>
      <div className="subject-name-container">
        <h1 className="subject-name">{subjectData.subject.name}</h1>
      </div>
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>
      {!subjectLoading && !subjectError && (
        <div>
          <div className="actions-btns-container">
            <AddIndexCardModal className="add-index-card-modal" />
            <button
              type="button"
              className="btn btn-success flash-card-toggle-btn"
              onClick={() => setFlashCardMode(!flashCardMode)}
            >
              <div className="d-flex align-items-center">
                <div className="flashcard-btn-label">
                  {flashCardMode ? (
                    <div className="flashcard-btn-label">
                      <FaClipboardList className="icon" />
                      <div className="btn-text">List Mode</div>
                    </div>
                  ) : (
                    <div className="flashcard-btn-label">
                      <FaRegMap />
                      <div className="btn-text">Flash Card Mode</div>
                    </div>
                  )}
                </div>
              </div>
            </button>
            {flashCardMode && <button className="btn btn-outline-dark">Flip All Cards</button>}
          </div>

          <div className="card-container">
            {flashCardMode ? (
              matchingIndexCards.length > 0 ? (
                <FlippableCards matchingIndexCards={matchingIndexCards} />
              ) : (
                <p>No index cards right now</p>
              )
            ) : matchingIndexCards.length > 0 ? (
              <div className="accordion-container">
                <Accordion matchingIndexCards={matchingIndexCards} />
              </div>
            ) : (
              <p>No index cards right now</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;
