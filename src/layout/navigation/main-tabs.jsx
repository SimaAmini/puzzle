import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CreatePost } from '../../screens/create-post';
import { Home } from './home';
import { screens } from '../../constants';
import colors from '../../configs/colors';
import { Icon } from '../../components';
import { Me } from './me';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Rubik',
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === screens.HOME) {
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
          // position: 'absolute',
          // bottom: 25,
          // marginHorizontal: 25,
          // elevation: 0,
          // backgroundColor: '#fff',
          // borderRadius: 10,
          // height: 60,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screens.CREATE_POST}
        component={CreatePost}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <Icon name="plus" size={30} color={colors.white} />
        //   ),
        //   tabBarButton: (props) => <CustomTabBarButton {...props} />,
        // }}
      />
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
// const CustomTabBarButton = ({ children, onPress }) => (
//   <TouchableOpacity
//     style={{
//       // top: -30,
//       justifyContent: 'center',
//       alignItems: 'center',
//       ...styles.shadow,
//     }}
//     onPress={onPress}
//   >
//     <View
//       style={{
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: colors.primary,
//       }}
//     >
//       {children}
//     </View>
//   </TouchableOpacity>
// );
