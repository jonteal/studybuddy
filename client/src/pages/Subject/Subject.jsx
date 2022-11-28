import { useEffect, useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";

import IndexCardComponent from "../../components/IndexCardComponent/IndexCardComponent";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal"
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from '../../graphql/queries/indexCardQueries';

// ADD TOTAL CONFIDENCE PERCENTAGE BAR WHEN USER CLICKS ON SUBJECT. PERCENTAGE WILL BE BROKEN INTO CATEGORIES. 
// PERCENT WILL BE OUT OF TOTAL CARDS FOR A GIVEN SUBJECT
// 1. IN THE BAG
// 2. SOMEWHAT GET
// 3. NO CLUE

const Subject = () => {
  const { id } = useParams();

  const [noClueCount, setNoClueCount] = useState(0);
  const [somewhatGetCount, setSomewhatGetCount] = useState(0);
  const [inTheBagCount, setInTheBagCount] = useState(0);

  const { loading: subjectLoading, error: subjectError, data: subjectData } = useQuery(GET_SUBJECT, {
    variables: { id },
  });
  
  const { loading: indexCardLoading, error: indexCardError, data: indexCardData } = useQuery(GET_INDEX_CARDS)

  console.log("indexCards: ", indexCardData);

  if (subjectLoading) return <Spinner />;
  if (subjectError) return <p>Something went wrong!</p>;

  if (indexCardLoading) return <Spinner />;
  if (indexCardError) return <p>Something went wrong!</p>;
  
  const subjectId = subjectData.subject.id;
  const indexCardArray = indexCardData.indexCards;

  const matchingIndexCards = indexCardArray.filter(card => card.subject.id === subjectId);

  console.log("matchingCardsArray: ", matchingIndexCards);

  let getPercentages = () => {
    if (indexCardData) {
      const cardCount = indexCardData.indexCards.length;
      // loop through all cards and look at status
      // push count of all statuses into 3 new arrays for each
      // (one for each status)
      // then divide the length of each of those arrays by 
      // the card count. That will yield the percent of each
      // status within the total card count
      
      matchingIndexCards.forEach(card => {
        if (card.status === 'No clue') {

          setNoClueCount(noClueCount + 1)
          console.log("noClueArray: ", noClueCount);

        } else if (card.status === 'Somewhat get') {

          setSomewhatGetCount(somewhatGetCount + 1)
          console.log('somewhatGetCount: ', somewhatGetCount);

        } else if (card.status === 'In the bag') {

          setInTheBagCount(somewhatGetCount + 1)
          console.log('inTheBagCount: ', inTheBagCount);
        }
      }
      )
    }
  }

  getPercentages();

  
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