import gql from 'graphql-tag';

export const GET_ASSESSMENTS = gql`
  {
    tests {
      id
      title
      content
      createdAt
    }
  }
`;
