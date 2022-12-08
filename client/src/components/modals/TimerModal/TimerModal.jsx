import './timeModal.css';

const TimerModal = () => {
  return (
    <div>
      <button
        type="button"
        className="set-timer-btn btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Set Study Time
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                How much time would you like to study for?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <select>
                <option>5 min</option>
                <option>10 min</option>
                <option>15 min</option>
                <option>Custom</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Start Timer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
