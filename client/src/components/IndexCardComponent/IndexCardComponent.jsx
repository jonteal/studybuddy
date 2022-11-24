import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FaEye, FaTrash } from "react-icons/fa";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import { DELETE_INDEX_CARD } from "../../graphql/mutations/indexCardMutations";

import "./indexCardComponent.css";
import { useEffect } from "react";

const IndexCardComponent = ({ indexCard }) => {

  const [statusColor, setStatusColor] = useState('')

  const navigate = useNavigate();

  const [deleteIndexCard] = useMutation(DELETE_INDEX_CARD, {
    variables: { id: indexCard.id },
    // onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_INDEX_CARDS }],
  });

  useEffect(() => {
    if (indexCard.status === 'In the bag') {
      setStatusColor('in-the-bag');
    } else if (indexCard.status === 'Somewhat get') {
      setStatusColor('somewhat-get')
    } else if (indexCard.status === 'No clue') {
      setStatusColor('no-clue')
    }
  }, [indexCard.status])

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{indexCard.title}</h5>
            <a className="btn btn-light" href={`/indexCards/${indexCard.id}`}>
              {<FaEye />}
            </a>
          </div>
          <p>{indexCard.description.substring(0, 50)}...</p>
          <p className="small status-label">
            Confidence:
            <strong>
              <span className={statusColor}>{indexCard.status}</span>
            </strong>
          </p>
          <button
            className="btn btn-light btn-sm delete-index-card-btn"
            onClick={deleteIndexCard}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexCardComponent;
