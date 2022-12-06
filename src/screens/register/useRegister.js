import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@core/hooks/use-auth';
import { useToast } from '@core/hooks/use-toast';

import { screens } from '@constants';

import { register } from '@services/auth/register';

export const useRegister = () => {
  const navigation = useNavigation();
  const { setToken, setUser } = useAuth();
  const { showErrorToast } = useToast();

  const redirectToLogin = () => navigation.navigate(screens.LOGIN);

  const onSuccess = useCallback(async (data) => {
    const { jwt, user } = data;
    await setToken(jwt);
    await setUser(user);

    return navigation.navigate(screens.MAIN_TABS, { screen: screens.FEED });
  }, []);

  const onError = useCallback((e) => {
    showErrorToast({
      title: 'Error!',
      body: e.message,
    });
  }, []);

  const { mutate: registerUser, isLoading } = useMutation({
    mutationFn: register,
    onSuccess,
    onError,
  });

  const onSubmit = (state) => {
    registerUser(state);
  };

  return {
    onSubmit,
    isLoading,
    redirectToLogin,
  };
};
