import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_SUBJECT } from "../../../graphql/mutations/subjectMutations";
import { GET_SUBJECTS } from "../../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../../graphql/queries/indexCardQueries";

const ConfirmDeleteModal = ({ subject }) => {
  const [deleteSubject] = useMutation(DELETE_SUBJECT, {
    variables: { id: subject.id },
    refetchQueries: [
      { query: GET_SUBJECTS },
      {
        query: GET_INDEX_CARDS,
      },
    ],
  });

  const subjectID = subject.id;

  const handleDelete = (id) => {
    if (subject.id === subjectID) {
      deleteSubject()
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FaTrash />    
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure you want to delete this subject? 
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">All index cards related to it will be lost.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button data-bs-dismiss="modal" onClick={handleDelete} type="button" className="btn btn-outline-danger">
                Delete Subject 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
