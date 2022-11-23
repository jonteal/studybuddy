import { gql } from "@apollo/client";

const GET_SUBJECTS = gql`
  query getSubjects {
    subjects {
      id,
      name
    }
  }
`;

const GET_SUBJECT = gql`
  query getSubject($id: ID) {
    subject(id: $id) {
      id
      name 
    }
  }
`;

export { GET_SUBJECTS, GET_SUBJECT };