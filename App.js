import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Register } from './src/screens/register/register';
import { Login } from './src/screens/login/login';
import { MainTabs } from './src/navigation/main-tabs';

import colors from './src/configs/colors';
import { screens } from '@constants';

const MainStack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={screens.LOGIN}
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Rubik',
          },
        }}
      >
        {isLoggedIn ? (
          <MainStack.Screen
            name={screens.MAIN_TABS}
            component={MainTabs}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <MainStack.Screen
              name={screens.LOGIN}
              component={Login}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name={screens.REGISTER}
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
