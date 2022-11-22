import { gql } from "@apollo/client";

const GET_SUBJECTS = gql`
  query getSubjects {
    subjects {
      id,
      name
    }
  }
`;

export { GET_SUBJECTS };