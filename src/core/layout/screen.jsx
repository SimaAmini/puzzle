import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { useTheme } from '@core/hooks/use-theme';

export default Screen = ({ children, style }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

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

const makeStyles = (colors) =>
  StyleSheet.create({
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
