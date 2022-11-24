import { useEffect } from "react";
import { useQuery } from "@apollo/client"
import { GET_SUBJECTS } from '../../graphql/queries/subjectQueries';
import SubjectRow from "../SubjectRow/SubjectRow";
import Spinner from "../Spinner/Spinner";

import './subjects.css';

const Subjects = () => {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  if (loading) return <Spinner />

  if (error) return <p>Something went wrong...</p>
  
  return (
    <div>
      <h2>Subject</h2>
      {!loading && !error && (
        <div className="subjects-container">
          {data.subjects.map(subject => (
            <SubjectRow key={subject.id} subject={subject} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Subjects;