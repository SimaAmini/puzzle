import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { screens } from '@constants';
import { register } from '@services/auth/register';
import { useAuth } from '@hooks/use-auth';

export const useRegister = () => {
  const navigation = useNavigation();
  const { setToken, setUser } = useAuth();

  const redirectToLogin = () => navigation.navigate(screens.LOGIN);

  const onSuccess = useCallback(async (data) => {
    const { jwt, user } = data;
    await setToken(jwt);
    await setUser(user);

    return navigation.navigate(screens.MAIN_TABS, { screen: screens.FEED });
  }, []);

  const onError = useCallback((e) => {
    console.log(e);
    //  show error
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
