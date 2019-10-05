import gql from 'graphql-tag';

export const DELETE_ASSESSMENT = gql`
  mutation DeleteAssessment($where: AssessmentWhereUniqueInput!) {
    deleteOneAssessment(where: $where) {
      id
    }
  }
`;
