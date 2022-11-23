import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_INDEX_CARD } from "../mutations/indexCardMutations";
import { GET_INDEX_CARD } from "../queries/indexCardQueries";

const EditIndexCardForm = ({ indexCard }) => {
  const [title, setTitle] = useState(indexCard.title);
  const [description, setDescription] = useState(indexCard.description);
  const [status, setStatus] = useState(() => {
    switch (indexCard.status) {
      case "No clue":
        return "new";
      case "Somewhat get":
        return "progress";
      case "In the bag":
        return "completed";
      default:
        throw new Error(`Unknown status: ${indexCard.status}`);
    }
  });

  const [updateIndexCard] = useMutation(UPDATE_INDEX_CARD, {
    variables: { id: indexCard.id, title, description, status },
    refetchQueries: [{ query: GET_INDEX_CARD, variables: { id: indexCard.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !status) {
      return alert("Please fill out all fields");
    }

    updateIndexCard(title, description, status);
  };

  return (
    <div className="mt-5">
      <h3>Update Index Card Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">No clue</option>
            <option value="progress">Somewhat get</option>
            <option value="completed">In the bag</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditIndexCardForm;