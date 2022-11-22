import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '../configs/colors';

export default Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={[styles.view, style]}>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
  },
  view: {
    flex: 1,
  },
});
