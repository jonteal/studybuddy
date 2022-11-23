import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_SUBJECT } from "../../graphql/mutations/subjectMutations";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";

import './subjectRow.css';

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
    <tr>
      <td><a className="btn btn-light" href={`/subjects/${subject.id}`}>{subject.name}</a></td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteSubject}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SubjectRow;