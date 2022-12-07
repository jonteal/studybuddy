import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import Accordion from "../../components/Accordion/Accordion";
import IndexCardComponent from "../../components/IndexCardComponent/IndexCardComponent";

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
      <button
        type="button"
        class="btn btn-outline-info"
        onClick={() => setFlashCardMode(!flashCardMode)}
      >
        {flashCardMode ? <p>Flash Card Mode</p> : <p>List Mode</p>}
      </button>
      {!subjectLoading && !subjectError && (
        <div>
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{subjectData.subject.name}</h1>
          <AddIndexCardModal />

          {flashCardMode ? (
            matchingIndexCards.length > 0 ? (
              matchingIndexCards.map((indexCard) => (
                <IndexCardComponent key={indexCard.id} indexCard={indexCard} />
              ))
            ) : (
              <p>No index cards right now</p>
            )
          ) : matchingIndexCards.length > 0 ? (
            <Accordion matchingIndexCards={matchingIndexCards} />
          ) : (
            <p>No index cards right now</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Subject;
