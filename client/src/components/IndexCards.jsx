import Spinner from "./Spinner";
import IndexCardComponent from './IndexCardComponent';
import { useQuery } from "@apollo/client";
import { GET_INDEX_CARDS } from '../queries/indexCardQueries';

const IndexCards = () => {
  const { loading, error, data } = useQuery(GET_INDEX_CARDS);

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  console.log('data: ', data);

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