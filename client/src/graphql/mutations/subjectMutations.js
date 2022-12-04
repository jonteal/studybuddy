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

const UPDATE_SUBJECT = gql`
  mutation UpdateSubject(
    $id: ID!
    $name: String!
  ) {
    updateSubject(
      id: $id 
      name: $name 
    ) {
      id 
      name 
    }
  }
`;

export { ADD_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT };
