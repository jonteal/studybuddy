import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Spinner from "../../components/Spinner/Spinner";
import SubjectInfo from "../../components/SubjectInfo/SubjectInfo";
import EditIndexCardForm from "../../components/EditIndexCardForm/EditIndexCardForm";
import DeleteIndexCardButton from "../../components/DeleteIndexCardButton/DeleteIndexCardButton";
import { useQuery } from "@apollo/client";
import { GET_INDEX_CARD } from "../../graphql/queries/indexCardQueries";

import "./indexCard.css";
import ConfidenceBadge from "../../components/ConfidenceBadge/ConfidenceBadge";
import UpdateIndexCardModal from "../../components/modals/UpdateIndexCardModal/UpdateIndexCardModal";

const IndexCard = () => {
  const [statusColor, setStatusColor] = useState("");

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_INDEX_CARD, {
    variables: { id },
  });

  useEffect(() => {
    const renderBadge = () => {
      if (data.indexCard.status === "In the bag") {
        setStatusColor("in-the-bag");
      } else if (data.indexCard.status === "Somewhat get") {
        setStatusColor("somewhat-get");
      } else if (data.indexCard.status === "No clue") {
        setStatusColor("no-clue");
      }
    };
    if (data) {
      renderBadge();
    }
  }, [data]);

  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            <FaRegArrowAltCircleLeft className="back-arrow" />
          </Link>

          <h1>{data.indexCard.title}</h1>
          <p>{data.indexCard.description}</p>

          <h5 className="mt-3">Confidence Level</h5>
          <p className="small status-label">
            <ConfidenceBadge
              className="lead"
              statusColor={statusColor}
              indexCard={data.indexCard}
            />
          </p>
          <SubjectInfo subject={data.indexCard.subject} />

          <div className="index-card-buttons">
            <UpdateIndexCardModal indexCard={data.indexCard} />

            <DeleteIndexCardButton indexCardId={data.indexCard.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexCard;
