import { useMutation } from "@apollo/react-hooks";

import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => console.log(error),
  });

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: { username: username, password: password },
    });
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
