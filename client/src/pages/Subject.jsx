import { Link, useParams } from "react-router-dom";

import IndexCardComponent from "../components/IndexCardComponent";
import AddIndexCardModal from "../components/AddIndexCardModal"
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SUBJECT } from "../queries/subjectQueries";
import { GET_INDEX_CARDS } from '../queries/indexCardQueries';
import IndexCards from "../components/IndexCards";


const Subject = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SUBJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      {!loading && !error && (
        <div>
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.subject.name}</h1>
          <AddIndexCardModal />

          <IndexCards />
          
        </div>
      )
      }
    </div>
  );
};

export default Subject

// 1. display all current index cards for a subject 
// 2. add index card modal component on here