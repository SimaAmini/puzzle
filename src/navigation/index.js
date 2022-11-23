import { useAuthStore } from '@hooks';
import { PrivateNavigator } from './private-navigator';
import { PublicNavigator } from './public-navigator';

export const RootNavigator = () => {
  //   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />;
};
