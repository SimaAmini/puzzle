import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import { Me } from './me';
import { Settings } from '../../screens/settings';

const Drawer = createDrawerNavigator();

export function DrawerAccount() {
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
