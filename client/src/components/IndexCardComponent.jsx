const IndexCardComponent = ({ indexCard }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{indexCard.title}</h5>
            <a className="btn btn-light" href={`/indexCards/${indexCard.id}`}>View</a>
          </div>
          <p className="small">
            Status: <strong>{indexCard.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexCardComponent;