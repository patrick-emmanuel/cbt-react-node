import gql from 'graphql-tag';

export const GET_ASSESSMENTS = gql`
  {
    assessments {
      id
      title
      content
      createdAt
    }
  }
`;
