import { useEffect, useState } from 'react';
import { useAuth } from '@core/hooks/use-auth';

import { PrivateNavigator } from './private-navigator';
import { PublicNavigator } from './public-navigator';
import { Splash } from '@screens';

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
      setLoading(false);
      setToken(authDataSerialized);
    }
  }

  if (loading && token === 'fake') return <Splash />;
  if (token && token !== 'fake') return <PrivateNavigator />;

  return <PublicNavigator />;
};
