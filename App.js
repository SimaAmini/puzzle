import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Register from './src/screens/register/register';

import colors from './src/configs/colors';
import Login from './src/screens/login/login';
import Feed from './src/screens/feed/feed';
import Profile from './src/screens/profile/profile';
import PostDetail from './src/screens/post-detail/post-detail';
import CreatePost from './src/screens/create-post/create-post';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <CreatePost />
        {/* <Feed /> */}
        {/* <Login /> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.light,
  },
});

export default App;
