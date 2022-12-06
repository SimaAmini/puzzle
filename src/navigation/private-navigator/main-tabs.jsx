import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Me } from './me';
import colors from '@core/configs/colors';
import { Icon } from '@core/components/icon';
import { CreatePost, Feed } from '@screens';
import { screens } from '@constants';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Rubik',
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === screens.FEED) {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === screens.CREATE_POST) {
            iconName = focused ? 'plus' : 'plus';
          } else if (route.name === screens.ME) {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen
        name={screens.FEED}
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={screens.CREATE_POST} component={CreatePost} />
      <Tab.Screen name={screens.ME} component={Me} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
