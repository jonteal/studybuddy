import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import SubjectRow from "../SubjectRow/SubjectRow";
import Spinner from "../Spinner/Spinner";

import "./subjects.css";
import { useState } from "react";

const Subjects = () => {
  const { loading, error, data } = useQuery(GET_SUBJECTS);
  const [sortState, setSortState] = useState("-");

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong...</p>;

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <div>
      <h4>Filter</h4>
      <select
        onChange={(e) => setSortState(e.target.value)}
        defaultValue="default"
        className="home-page-filter"
      >
        <option value="default">-</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
      <h2>Subject</h2>
      {!loading && !error && (
        // <div className="subjects-container">
        //   {data.subjects
        //     .sort(sortMethods[sortState].method)
        //     .map((subject, i) => (
        //       <SubjectRow key={subject.id} subject={subject} />
        //     ))}
        // </div>
        <div className="subjects-container">
          {data.subjects.map((subject) => (
            <SubjectRow key={subject.id} subject={subject} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Subjects;
