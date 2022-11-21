import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import colors from '../configs/colors';

export default Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </View>
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
