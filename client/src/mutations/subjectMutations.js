import { gql } from "@apollo/client";

const ADD_SUBJECT = gql`
  mutation addSubject($name: String!) {
    addSubject(name: $name) {
      id
      name
    }
  }
`;

const DELETE_SUBJECT = gql`
  mutation deleteSubject($id: ID!) {
    deleteSubject(id: $id) {
      id 
      name 
    }
  }
`;

export { ADD_SUBJECT, DELETE_SUBJECT };