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


export { ADD_INDEX_CARD };