import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screens } from '@constants';
import { Register, Login } from '@screens';

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
      <Stack.Screen name={screens.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}
