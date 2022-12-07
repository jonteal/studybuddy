import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import Accordion from "../../components/Accordion/Accordion";
import IndexCards from "../../components/IndexCards/IndexCards";

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

  if (subjectLoading) return <Spinner />;
  if (subjectError) return <p>Something went wrong!</p>;

  if (indexCardLoading) return <Spinner />;
  if (indexCardError) return <p>Something went wrong!</p>;

  const subjectId = subjectData.subject.id;
  const indexCardArray = indexCardData.indexCards;

  const matchingIndexCards = indexCardArray.filter(
    (card) => card.subject.id === subjectId
  );

  return (
    <div>
      <div className="btns-container">
        <button
          type="button"
          className="btn btn-light flash-card-toggle-btn"
          onClick={() => setFlashCardMode(!flashCardMode)}
        >
          {flashCardMode ? <p>Flash Card Mode</p> : <p>List Mode</p>}
        </button>
        <h1 className="subject-name">{subjectData.subject.name}</h1>
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>
      </div>
      {!subjectLoading && !subjectError && (
        <div>
          <AddIndexCardModal className="add-index-card-modal" />
          <div className="card-container">
            {flashCardMode ? (
              matchingIndexCards.length > 0 ? (
                <IndexCards matchingIndexCards={matchingIndexCards} />
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
