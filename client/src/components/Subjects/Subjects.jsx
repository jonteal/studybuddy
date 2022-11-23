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
    <>
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {data.subjects.map(subject => (
              <SubjectRow key={subject.id} subject={subject} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Subjects;