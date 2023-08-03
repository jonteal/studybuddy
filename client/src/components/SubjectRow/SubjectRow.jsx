import { useMutation } from "@apollo/client";
import { DELETE_SUBJECT } from "../../graphql/mutations/subjectMutations";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";

import "./subjectRow.css";

const SubjectRow = ({ subject }) => {
  const [deleteSubject] = useMutation(DELETE_SUBJECT, {
    variables: { id: subject.id },
    refetchQueries: [
      { query: GET_SUBJECTS },
      {
        query: GET_INDEX_CARDS,
      },
    ],
  });

  return (
    <div className="subject-container">
      <div>
        <a className="subject-button" href={`/subjects/${subject.id}`}>
          {subject.name}
        </a>
      </div>
      <div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle delete-subject-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu">
            <li className="delete-btn-list-item">
              <button
                className="dropdown-item delete-btn"
                onClick={deleteSubject}
              >
                Delete Subject
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectRow;
