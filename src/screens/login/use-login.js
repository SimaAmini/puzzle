import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@core/hooks/use-auth';
import { useToast } from '@core/hooks/use-toast';

import { screens } from '@constants';

import { login } from '@services/auth/login';

export const useLogin = () => {
  const navigation = useNavigation();
  const { setUser, setToken } = useAuth();
  const { showErrorToast } = useToast();

  const redirectToRegister = () => navigation.navigate(screens.REGISTER);

  const onSuccess = useCallback(async (data) => {
    const { jwt, user } = data;
    await setToken(jwt);
    await setUser(user);
  }, []);

  const onError = useCallback((e) => {
    showErrorToast({
      title: 'Error!',
      body: e.message,
    });
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
