import { gql } from "@apollo/client";

const GET_INDEX_CARDS = gql`
  query getIndexCards {
    indexCards {
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

const GET_INDEX_CARD = gql`
  query getIndexCard($id: ID) {
    indexCard(id: $id) {
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

export { GET_INDEX_CARDS, GET_INDEX_CARD };