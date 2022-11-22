import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Register from './src/screens/register/register';
import Icon from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import Login from './src/screens/login/login';
import Feed from './src/screens/feed/feed';
import Profile from './src/screens/profile/profile';
import PostDetail from './src/screens/post-detail/post-detail';
import CreatePost from './src/screens/create-post/create-post';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './src/constants';
import colors from './src/configs/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import { Settings } from './src/screens/settings/settings';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Me() {
  return (
    <Stack.Navigator initialRouteName={screens.PROFILE}>
      <Stack.Screen
        name={screens.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={screens.POST_DETAIL} component={PostDetail} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator initialRouteName={screens.Feed}>
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

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      // top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.primary,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function MainTabs() {
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

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'create-post') {
            iconName = focused ? 'plus' : 'plus';
          } else if (route.name === 'profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'DrawerScreens') {
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
        name={'Home'}
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
      <Tab.Screen
        name="DrawerScreens"
        component={DrawerScreens}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName={'Me'}
      screenOptions={{
        // headerStyle: {
        //   height: headerHeight, // Specify the height of your custom header
        // },
        // headerShown: true,
        // headerTransparent: true,
        headerTitle: () => {},
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name={'Me'}
        component={Me}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const App = () => {
  const token = 'token';

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
        {token ? (
          <MainStack.Screen
            name="MainTabs"
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

export default App;
