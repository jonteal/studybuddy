import { FaTrash, FaEye } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_SUBJECT } from "../mutations/subjectMutations";
import { GET_SUBJECTS } from "../queries/subjectQueries";
import { GET_INDEX_CARDS } from "../queries/indexCardQueries";

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
      <td>{subject.name}</td>
      <td>
        <a className="btn btn-light" href={`/subjects/${subject.id}`}>
          {<FaEye />}
        </a>
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteSubject}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SubjectRow;
