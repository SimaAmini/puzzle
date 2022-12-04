import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PostDetail } from '@screens/post-detail';
import { screens } from '@constants';
import { MainTabs } from './main-tabs';

const Stack = createNativeStackNavigator();

export function PrivateNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.MAIN_TABS}
        component={MainTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screens.POST_DETAIL}
        component={PostDetail}
        options={{
          title: 'Post',
        }}
      />
    </Stack.Navigator>
  );
}
