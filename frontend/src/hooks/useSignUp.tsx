import { Values } from "models/forms/signUp";

const signUp = (values: Values): Promise<void> => {
  // TODO: Link this function to sign up API
  return Promise.resolve();
};

const useSignUp = () => {
  return {
    signUp,
  };
};

export default useSignUp;
