import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SUBJECT } from '../../graphql/mutations/subjectMutations';
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";

import "./editSubjectForm.css";

const EditIndexCardForm = ({ subject }) => {
  const [name, setName] = useState(subject.name);


  const [updateSubject] = useMutation(UPDATE_SUBJECT, {
    variables: { id: subject.id, name },
    refetchQueries: [
      { query: GET_SUBJECT, variables: { id: subject.id } },
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Please fill out all fields");
    }

    updateSubject(name);
  };

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        

        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditIndexCardForm;
