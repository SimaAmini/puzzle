import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '@screens';

import { screens } from '@constants';

const Stack = createNativeStackNavigator();

export function PublicNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screens.REGISTER}
        component={Register}
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
}
