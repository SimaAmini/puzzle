import { useEffect } from 'react';
import { useAuth } from '@hooks/use-auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { PrivateNavigator } from './private-navigator';
import { PublicNavigator } from './public-navigator';

export const RootNavigator = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    // AsyncStorage.clear();
  }, []);

  return getToken() ? <PrivateNavigator /> : <PublicNavigator />;
};
