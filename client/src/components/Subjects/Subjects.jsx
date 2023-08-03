import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SUBJECTS } from "../../graphql/queries/subjectQueries";
import SubjectRow from "../SubjectRow/SubjectRow";
import Spinner from "../Spinner/Spinner";
import { orderBy } from "lodash";

import "./subjects.css";

const Subjects = () => {
  const { loading, error, data } = useQuery(GET_SUBJECTS);
  const [sortState, setSortState] = useState("-");
  const [sortedSubjects, setSortedSubjects] = useState([data?.subjects]);

  // let sortedSubjects = data?.subjects;

  // console.log("sortedSubjects", sortedSubjects);

  // useEffect(() => {
  //   if (sortState === "ascending") {
  //     setSortedSubjects(orderBy(data?.subjects, "name", "asc"));
  //   } else if (sortState === "descending") {
  //     setSortedSubjects(orderBy(data?.subjects, "name", "desc"));
  //   }
  // }, [sortState]);

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong...</p>;

  const handleSort = (e) => {
    setSortState(e.target.value);
  };

  return (
    <div>
      {/* <h4>Filter</h4>
      <select
        onChange={handleSort}
        defaultValue="default"
        className="home-page-filter"
      >
        <option value="default">-</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select> */}
      <h2>Subject</h2>
      {!loading && !error && (
        <div className="subjects-container">
          {data.subjects.map((subject) => (
            <SubjectRow key={subject?.id} subject={subject} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Subjects;
