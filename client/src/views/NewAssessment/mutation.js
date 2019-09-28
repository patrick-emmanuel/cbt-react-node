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
