import React from "react";
import EditIndexCardForm from "../EditIndexCardForm/EditIndexCardForm";

const UpdateIndexCardModal = ({ indexCard }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <EditIndexCardForm indexCard={indexCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateIndexCardModal;
