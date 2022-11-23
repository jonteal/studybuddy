import { FaEye } from 'react-icons/fa';

import './indexCardComponent.css';

const IndexCardComponent = ({ indexCard }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
      <a className="btn btn-light" href={`/indexCards/${indexCard.id}`}>
        <div className="card body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{indexCard.title}</h5>
            <a className="btn btn-light" href={`/indexCards/${indexCard.id}`}>{<FaEye />}</a>
          </div>
          <p>{indexCard.description.substring(0, 75)}...</p>
          <p className="small">
            Confidence: <strong>{indexCard.status}</strong>
          </p>
        </div>
        </a>
      </div>
    </div>
  );
};

export default IndexCardComponent;