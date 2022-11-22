import {FaTrash} from 'react-icons/fa';
import { GET_SUBJECTS } from "../queries/subjectQueries";

const SubjectRow = ({ subject }) => {
  return (
    <tr>
      <td>{subject.name}</td>
      <td>
        <button className='btn btn-danger btn-sm'>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}

export default SubjectRow;