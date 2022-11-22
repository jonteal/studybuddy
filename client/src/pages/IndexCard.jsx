import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SubjectInfo from "../components/SubjectInfo";
import { useQuery } from "@apollo/client";
import { GET_INDEX_CARD } from "../queries/indexCardQueries";

const IndexCard = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_INDEX_CARD, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.indexCard.title}</h1>
          <p>{data.indexCard.description}</p>

          <h5 className="mt-3">Learning Progress</h5>
          <p className="lead">{data.indexCard.status}</p>
          <SubjectInfo subject={data.indexCard.subject} />
        </div>
      )}
    </>
  );
};

export default IndexCard;
