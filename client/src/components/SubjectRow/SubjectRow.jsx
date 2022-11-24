import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";

import "./subjectRow.css";

const SubjectRow = ({ subject }) => {
  return (
    <div className="subject-container">
      <div>
        <a className="btn btn-light" href={`/subjects/${subject.id}`}>
          {subject.name}
        </a>
      </div>
      <div>
        <ConfirmDeleteModal subject={subject} />
      </div>
    </div>
  );
};

export default SubjectRow;
