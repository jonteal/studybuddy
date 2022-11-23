import Spinner from "../Spinner/Spinner";
import IndexCardComponent from "../IndexCardComponent/IndexCardComponent";
import { useQuery } from "@apollo/client";
import { GET_INDEX_CARDS } from '../../graphql/queries/indexCardQueries';

import './indexCards.css';

const IndexCards = () => {
  const { loading, error, data } = useQuery(GET_INDEX_CARDS);

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      { data.indexCards.length > 0 ? (
        <div className="row mt-4">
          {data.indexCards.map((indexCard) => (
            <IndexCardComponent key={indexCard.id} indexCard={indexCard} />
          ))}
        </div>

      ) : (<p>No index cards right now</p>)}
    </div>
  )
};

export default IndexCards;