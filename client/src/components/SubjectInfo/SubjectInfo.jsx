import { FaBookReader } from 'react-icons/fa';

import './subjectInfo.css';

const SubjectInfo = ({ subject }) => {
  return (
    <div className='subject-info-container'>
      <h5 className='small'>Subject</h5>
      <h6>
        <FaBookReader className='subject-icon'/>
        {subject.name}
      </h6>
    </div>
  )
}

export default SubjectInfo