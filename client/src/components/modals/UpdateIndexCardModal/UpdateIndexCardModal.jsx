import React from "react";
import EditIndexCardForm from "./../../EditIndexCardForm/EditIndexCardForm";

const UpdateIndexCardModal = ({ indexCard }) => {

  console.log(indexCard);
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
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
              <h1 className="modal-title fs-5" id="addIndexCardModalLabel">
                {indexCard.subject.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <EditIndexCardForm indexCard={indexCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateIndexCardModal;
