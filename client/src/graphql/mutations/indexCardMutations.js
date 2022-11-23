import { gql } from "@apollo/client";

const ADD_INDEX_CARD = gql`
  mutation AddIndexCard(
    $title: String!
    $description: String!
    $status: IndexCardStatus!
    $subjectId: ID!
  ) {
    addIndexCard(
      title: $title
      description: $description
      status: $status 
      subjectId: $subjectId 
    ) {
      id
      title
      description 
      status 
      subject {
        id 
        name 
      }
    }
  }
`;

const DELETE_INDEX_CARD = gql`
  mutation DeleteIndexCard ($id: ID!) {
    deleteIndexCard(id: $id) {
      id
    }
  }
`;

const UPDATE_INDEX_CARD = gql`
  mutation UpdateIndexCard(
    $id: ID!
    $title: String!
    $description: String!
    $status: IndexCardStatusUpdate!
  ) {
    updateIndexCard(
      id: $id 
      title: $title 
      description: $description 
      status: $status 
    ) {
      id 
      title 
      description 
      status 
      subject {
        id 
        name 
      }
    }
  }
`;

export { ADD_INDEX_CARD, UPDATE_INDEX_CARD, DELETE_INDEX_CARD };