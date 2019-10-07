import gql from 'graphql-tag';

export const fragmentUser = gql`
  fragment User on User {
    id
    email
    name
    role
  }
`;

export const SIGN_UP_MUTATION = gql`
  ${fragmentUser}
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        ...User
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  ${fragmentUser}
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...User
      }
    }
  }
`;

export const VERIFY_TOKEN_MUTATION = gql`
  ${fragmentUser}
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      token
      user {
        ...User
      }
    }
  }
`;
