import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constants';
import { PostDetail, Profile } from '../../screens';

const MeStack = createNativeStackNavigator();

export function Me() {
  return (
    <MeStack.Navigator initialRouteName={screens.PROFILE}>
      <MeStack.Screen
        name={screens.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
      <MeStack.Screen name={screens.POST_DETAIL} component={PostDetail} />
    </MeStack.Navigator>
  );
}
