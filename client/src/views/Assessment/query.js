import gql from 'graphql-tag';

export const GET_ASSESSMENT = gql`
  query Assessment($where: AssessmentWhereUniqueInput!) {
    assessment(where: $where) {
      id
      title
      description
      createdAt
      questions(first: 10) {
        content
        options(first: 10) {
          content
          correct
        }
      }
    }
  }
`;

export const GET_ASSESSMENTS = gql`
  {
    assessments {
      id
      title
      description
      createdAt
    }
  }
`;