import { FaBookReader } from 'react-icons/fa';

import './subjectInfo.css';

const SubjectInfo = ({ subject }) => {
  return (
    <>
      <h5>Subjects</h5>
      <h6>
        <FaBookReader className='subject-icon'/>
        {subject.name}
      </h6>
    </>
  )
}

export default SubjectInfo