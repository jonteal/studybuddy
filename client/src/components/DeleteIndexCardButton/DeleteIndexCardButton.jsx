import { useNavigate } from "react-router-dom"
import { FaTrash } from 'react-icons/fa';

import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import { useMutation } from "@apollo/client";
import { DELETE_INDEX_CARD } from "../../graphql/mutations/indexCardMutations";

import './deleteIndexCardButton.css';

const DeleteIndexCardButton = ({ indexCardId }) => {

  const navigate = useNavigate();

  const [deleteIndexCard] = useMutation(DELETE_INDEX_CARD, {
    variables: { id: indexCardId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_INDEX_CARDS }],
  })

  return (
    <div className="d-flex mt-5 ms-auto">
      <button onClick={deleteIndexCard} className="btn btn-outline-danger m-2">
        <FaTrash className="icon" /> Delete Index Card
      </button>
    </div>  )
}

export default DeleteIndexCardButton