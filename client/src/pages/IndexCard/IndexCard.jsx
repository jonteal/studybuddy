import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Spinner from "../../components/Spinner/Spinner";
import SubjectInfo from "../../components/SubjectInfo/SubjectInfo";
import DeleteIndexCardButton from "../../components/DeleteIndexCardButton/DeleteIndexCardButton";
import { useQuery } from "@apollo/client";
import { GET_INDEX_CARD } from "../../graphql/queries/indexCardQueries";
import ConfidenceBadge from "../../components/ConfidenceBadge/ConfidenceBadge";
import UpdateIndexCardModal from "../../components/modals/UpdateIndexCardModal/UpdateIndexCardModal";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import { GET_SUBJECT } from "../../graphql/queries/subjectQueries";

import "./indexCard.css";

const IndexCard = ({ matchingIndexCards }) => {
  const [statusColor, setStatusColor] = useState("");

  const { id } = useParams();
  const {
    loading: indexCardLoading,
    error: indexCardError,
    data: indexCardData,
  } = useQuery(GET_INDEX_CARD, {
    variables: { id },
  });

  const {
    loading: indexCardsLoading,
    error: indexCardsError,
    data: indexCardsData,
  } = useQuery(GET_INDEX_CARDS);

  // const {
  //   loading: subjectLoading,
  //   error: subjectError,
  //   data: subjectData,
  // } = useQuery(GET_SUBJECT, {
  //   variables: { id },
  // });

  useEffect(() => {
    const renderBadge = () => {
      if (indexCardData.indexCard.status === "In the bag") {
        setStatusColor("in-the-bag");
      } else if (indexCardData.indexCard.status === "Somewhat get") {
        setStatusColor("somewhat-get");
      } else if (indexCardData.indexCard.status === "No clue") {
        setStatusColor("no-clue");
      }
    };
    if (indexCardData) {
      renderBadge();
    }
  }, [indexCardData]);

  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate(-1);
  };

  if (indexCardLoading || indexCardsLoading)
    return <Spinner />;
  if (indexCardError || indexCardsError)
    return <p>Something went wrong!</p>;


  // const subjectId = subjectData.subject.id;
  // const indexCardsArray = indexCardsData.indexCards;
  // const matchingIndexCards = indexCardsArray.filter(
  //   (card) => card.subject.id === subjectId
  // );


  return (
    <div>
      {!indexCardLoading && !indexCardError && (
        <div className="index-card-main-container">
          <a className="last-card-btn" href="/">
            <FaAngleLeft />
          </a>
          <div className="mx-auto w-75 card p-5">
            <button
              onClick={handleBackNavigate}
              className="btn btn-light btn-sm w-25 d-inline ms-auto"
            >
              <FaRegArrowAltCircleLeft className="back-arrow" />
            </button>

            <h1>{indexCardData.indexCard.title}</h1>
            <p>{indexCardData.indexCard.description}</p>

            <h5 className="mt-3">Confidence Level</h5>
            <p className="small status-label">
              <ConfidenceBadge
                className="lead"
                statusColor={statusColor}
                indexCard={indexCardData.indexCard}
              />
            </p>

            <SubjectInfo subject={indexCardData.indexCard.subject} />

            <div className="index-card-buttons">
              <UpdateIndexCardModal indexCard={indexCardData.indexCard} />

              <DeleteIndexCardButton indexCardId={indexCardData.indexCard.id} />
            </div>
          </div>
          <a className="next-card-btn" href={"/"}>
            <FaAngleRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default IndexCard;
