import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile, Settings } from '@screens';

import { screens } from '@constants';

const Stack = createNativeStackNavigator();

export function Me() {
  return (
    <Stack.Navigator initialRouteName={screens.PROFILE}>
      <Stack.Screen
        name={screens.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.SETTINGS}
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
}
