import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { RootNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
