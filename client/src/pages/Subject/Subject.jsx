import { Link, useParams } from "react-router-dom";

import IndexCardComponent from "../../components/IndexCardComponent/IndexCardComponent";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal"
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from '../../graphql/queries/indexCardQueries';

const Subject = () => {
  const { id } = useParams();

  const { loading: subjectLoading, error: subjectError, data: subjectData } = useQuery(GET_SUBJECT, {
    variables: { id },
  });

  const { loading: indexCardLoading, error: indexCardError, data: indexCardData } = useQuery(GET_INDEX_CARDS)

  if (subjectLoading) return <Spinner />;
  if (subjectError) return <p>Something went wrong!</p>;

  if (indexCardLoading) return <Spinner />;
  if (indexCardError) return <p>Something went wrong!</p>;

  const subjectId = subjectData.subject.id;
  const indexCardArray = indexCardData.indexCards;

  const matchingIndexCards = indexCardArray.filter(card => card.subject.id === subjectId);
  
  return (
    <div>
      {!subjectLoading && !subjectError && (
        <div>
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{subjectData.subject.name}</h1>
          <AddIndexCardModal />

        { matchingIndexCards.length > 0 ? (
          <div className="row mt-4">
            {matchingIndexCards.map((indexCard) => (
              <IndexCardComponent key={indexCard.id} indexCard={indexCard} />
            ))}
          </div>
  
        ) : (<p>No index cards right now</p>)}
        
        </div>
      )
      }
    </div>
  );
};

export default Subject

// 1. display all current index cards for a subject 
// 2. add index card modal component on here