import gql from 'graphql-tag';

export const CREATE_ASSESSMENT = gql`
  mutation CreateAssessment($data: AssessmentCreateInput!) {
    createOneAssessment(data: $data) {
      id
      title
      description
    }
  }
`;

export const DELETE_ASSESSMENT = gql`
  mutation DeleteAssessment($where: AssessmentWhereUniqueInput!) {
    deleteOneAssessment(where: $where) {
      id
    }
  }
`;
