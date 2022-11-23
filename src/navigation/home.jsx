import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '@constants';

import { Feed, PostDetail } from '@screens';

const Stack = createNativeStackNavigator();

export function Home() {
  return (
    <Stack.Navigator initialRouteName={screens.FEED}>
      <Stack.Screen
        name={screens.FEED}
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={screens.POST_DETAIL} component={PostDetail} />
    </Stack.Navigator>
  );
}
