import gql from 'graphql-tag';

export const CREATE_ASSESSMENT = gql`
  mutation CreateAssessment($data: TestCreateInput!) {
    createOneTest(data: $data) {
      id
      title
      content
    }
  }
`;
