import { Values } from "../models/forms/login";

const login = (values: Values): Promise<void> => {
  // TODO: Link this function to login API
  return Promise.resolve();
};

const useLogin = () => {
  return {
    login,
  };
};

export default useLogin;
