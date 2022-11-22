import { FaBookReader } from 'react-icons/fa';

const SubjectInfo = ({ subject }) => {
  return (
    <>
      <h5>Subjects</h5>
      <h6>
        <FaBookReader />
        {subject.name}
      </h6>
    </>
  )
}

export default SubjectInfo