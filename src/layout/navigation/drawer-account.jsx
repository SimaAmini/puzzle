import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import { Me } from './me';
import { Settings } from '../../screens/settings';
import { screens } from '../../constants';

const Drawer = createDrawerNavigator();

export function DrawerAccount() {
  return (
    <Drawer.Navigator
      initialRouteName={screens.ME}
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
        name={screens.ME}
        component={Me}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Drawer.Screen name={screens.SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
}
