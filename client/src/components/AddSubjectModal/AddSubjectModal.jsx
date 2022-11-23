import { useState } from 'react';
import {FaBookReader} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_SUBJECT } from '../../graphql/mutations/subjectMutations';
import { GET_SUBJECTS } from '../../graphql/queries/subjectQueries';

import './addSubjectModal.css';

const AddSubjectModal = () => {
  const [name, setName] = useState('');

  const [addSubject] = useMutation(ADD_SUBJECT, {
    variables: { name },
    update(cache, { data: { addSubject } }) {
      const { subjects } = cache.readQuery({ query: GET_SUBJECTS });

      cache.writeQuery({
        query: GET_SUBJECTS,
        data: { subjects: [...subjects, addSubject] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return alert('Please fill in the subject name')
    };

    addSubject(name);

    setName('');
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addSubjectModal"
      >
        <div className="d-flex align-items-center">
          <FaBookReader className="icon" />
          <div className='add-subject-btn-label'>Add Subject</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addSubjectModal"
        aria-labelledby="addSubjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addSubjectModalLabel">
                Add Subject
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <button
                  className="btn btn-secondary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddSubjectModal