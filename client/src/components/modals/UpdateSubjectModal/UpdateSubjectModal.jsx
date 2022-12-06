import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_SUBJECT } from '../../../graphql/mutations/subjectMutations';
import { GET_SUBJECT } from '../../../graphql/queries/subjectQueries';
import { FaEdit } from "react-icons/fa";

import './updateSubjectModal.css'

const UpdateSubjectModal = ({ subject }) => {
  const [name, setName] = useState('');

  const [updateSubject] = useMutation(UPDATE_SUBJECT, {
    variables: { id: subject.id, name },
    refetchQueries: [
      { query: GET_SUBJECT, variables: { id: subject.id } },
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return alert('Please fill in the subject name')
    };

    updateSubject(name);

    setName('');
  }

  return (
    <div>
      <button
        type="button"
        className="dropdown-item"
        data-bs-toggle="modal"
        data-bs-target="#updateSubjectModal"
      >
      <FaEdit />
      </button>

      <div
        className="modal fade"
        id="updateSubjectModal"
        aria-labelledby="updateSubjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateSubjectModalLabel">
                Update Subject
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateSubjectModal;