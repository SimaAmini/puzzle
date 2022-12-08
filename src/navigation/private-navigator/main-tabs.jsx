import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreatePost, Feed } from '@screens';

import { Icon } from '@core/components/icon';
import { useTheme } from '@core/hooks/use-theme';

import { screens } from '@constants';

import { Me } from './me';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          // backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins',
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
          backgroundColor: colors.light,
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

const makeStyles = (colors) =>
  StyleSheet.create({
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });
