import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaList } from 'react-icons/fa';
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import { ADD_INDEX_CARD} from '../../graphql/mutations/indexCardMutations';

import './addIndexCardModal.css';

const AddIndexCardModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [status, setStatus] = useState('new');

  const [addIndexCard] = useMutation(ADD_INDEX_CARD, {
    variables: { title, description, subjectId, status },
    update(cache, { data: { addIndexCard }}) {
      const { indexCards } = cache.readQuery({ query: GET_INDEX_CARDS });
      cache.writeQuery({
        query: GET_INDEX_CARDS,
        data: { indexCards: [...indexCards, addIndexCard] }
      })
    }
  });

  // Get Subjects for select
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addIndexCard(title, description, subjectId, status);

    setTitle('');
    setDescription('');
    setStatus('new');
    setSubjectId('');
  };

  if (loading) return null;
  if (error) return 'Something went wrong';

  return (
    <>
    {!loading && !error && (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addIndexCardModal"
        >
          <div className="d-flex align-items-center ">
            <FaList className="icon" />
            <div className="add-index-btn-label">New Index Card</div>
          </div>
        </button>

        <div
          className="modal fade"
          id="addIndexCardModal"
          aria-labelledby="addIndexCardModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addIndexCardModalLabel">
                  New Index Card
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
              <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <select id="subjectId" className="form-select" value={subjectId} onChange={(e) => setSubjectId(e.target.value)}>
                      <option value=''>Select Subject</option>
                      { data.subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                      ))}
                    </select>
                  </div>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      id="name"
                      type="text"
                      className="form-control"
                    />
                    <label className="form-label">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      className="form-control"
                    ></textarea>
                    <label className="form-label">Status</label>
                    <select
                      id="status"
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="new">No clue</option>
                      <option value="progress">Somewhat get</option>
                      <option value="completed">In the bag</option>
                    </select>
                  </div>

                  

                  <button
                    className="btn btn-primary"
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
    )}
  </>
  )
}

export default AddIndexCardModal;