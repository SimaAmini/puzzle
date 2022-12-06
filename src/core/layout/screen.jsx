import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '@core/configs/colors';

export default Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GestureHandlerRootView style={styles.gestureContainer}>
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
  gestureContainer: {
    flex: 1,
  },
});
