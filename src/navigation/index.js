import { useEffect, useState } from 'react';

import { Splash } from '@screens';

import { useAuth } from '@core/hooks/use-auth';

import { PrivateNavigator } from './private-navigator';
import { PublicNavigator } from './public-navigator';

export const RootNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('fake');
  const { getToken } = useAuth();

  useEffect(() => {
    loadStorageData();
  });

  async function loadStorageData() {
    const authDataSerialized = await getToken();

    if (authDataSerialized || authDataSerialized !== 'fake') {
      setTimeout(() => {
        setToken(authDataSerialized);
        setLoading(false);
      }, 1500);
    }
  }

  if (loading && token === 'fake') return <Splash />;
  if (token && token !== 'fake') return <PrivateNavigator />;

  return <PublicNavigator />;
};
