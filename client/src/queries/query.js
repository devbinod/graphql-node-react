import { gql } from "apollo-boost";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookQuery = gql`
  mutation($name: String!, $authorId: ID!, $genre: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getSingleBookQuery = gql`
  query($Id: ID) {
    book(id: $Id) {
      name
      id
      author {
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
export { getAuthorQuery, getBookQuery, addBookQuery, getSingleBookQuery };
