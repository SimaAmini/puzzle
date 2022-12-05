import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { login } from '@services/auth/login';
import { screens } from '@constants';
import { useAuth } from '@hooks/use-auth';

export const useLogin = () => {
  const navigation = useNavigation();
  const { setUser, setToken } = useAuth();

  const redirectToRegister = () => navigation.navigate(screens.REGISTER);

  const onSuccess = useCallback(async (data) => {
    const { jwt, user } = data;
    await setToken(jwt);
    await setUser(user);
  }, []);

  const onError = useCallback((e) => {
    console.log(e);
    //  show error
  }, []);

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });

  const onSubmit = (state) => {
    loginUser(state);
  };

  return {
    onSubmit,
    isLoading,
    redirectToRegister,
  };
};
