import { useState, useEffect } from "react";
import { FaTrash, FaRegListAlt } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_SUBJECT } from "../../graphql/mutations/subjectMutations";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";

import "./subjectRow.css";

const SubjectRow = ({ subject }) => {
  // const [cardCount, setCardCount] = useState(0); // delete when redux is added

  const [deleteSubject] = useMutation(DELETE_SUBJECT, {
    variables: { id: subject.id },
    refetchQueries: [
      { query: GET_SUBJECTS },
      {
        query: GET_INDEX_CARDS,
      },
    ],
  });

  // === CODE BELOW IS IN PROGRESS ATTEMPT TO UPDATE CARD COUNT FOR EACH CARD. GOING TO TRY INTRODUCING REDUX TO
  // HANDLE GLOBAL STATE, THEN SELECT THAT INFORMATION AND DISPLAY IT THAT WAY ===

  // const { loading: indexCardLoading, error: indexCardError, data: indexCardData } = useQuery(GET_INDEX_CARDS);

  // useEffect(() => {
  //   const getCardCount = (index) => {
  //     if (indexCardData) {
  //       if (indexCardData.indexCards[index].subject.id === '637f15490bc0936119c6a844') {
  //         setCardCount(cardCount + 1)
  //       }
  //       console.log(cardCount);
  //     }
  //   }
  //     indexCardData.indexCards.forEach(getCardCount)
  // }, [indexCardData, cardCount])

  // if (indexCardLoading) return null;
  // if (indexCardError) return null;

  return (
    <div className="subject-container">
      <div>
        <a className="btn btn-light" href={`/subjects/${subject.id}`}>
          {subject.name}
        </a>
      </div>
      {/* ADD BACK IN WHEN REDUX IS ADDED TO APP */}
      {/* <div className="card-count-container">
            <FaRegListAlt className="card-icon" />
            <p className="card-count">{cardCount}</p>
          </div> */}
      <div>
        <button
          className="delete-subject-button btn btn-outline-danger btn-sm"
          onClick={deleteSubject}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default SubjectRow;
