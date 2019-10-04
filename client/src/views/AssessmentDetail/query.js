import gql from 'graphql-tag';

export const GET_ASSESSMENT = gql`
  query Assessment($where: AssessmentWhereUniqueInput!) {
    assessment(where: $where) {
      id
      title
      description
      createdAt
    }
  }
`;
