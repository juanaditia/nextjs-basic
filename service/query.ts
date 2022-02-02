import { gql } from '@apollo/client';

export const LoginQuery = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      user {
        username
      }
      access_token
    }
  }
`;
