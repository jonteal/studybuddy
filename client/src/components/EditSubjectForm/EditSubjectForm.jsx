import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SUBJECT } from "../../graphql/mutations/subjectMutations";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";

import "./editSubjectForm.css";

const EditSubjectForm = ({ subject }) => {
  const [name, setName] = useState(subject.name);
    
  
  const [updateIndexCard] = useMutation(UPDATE_SUBJECT, {
    variables: { id: subject.id, name },
    refetchQueries: [
      { query: GET_SUBJECTS, variables: { id: subject.id } },
    ],
  });


  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Please fill out all fields");
    }

    updateIndexCard(name);
  }

  

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
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
  )
}

export default EditSubjectForm;
