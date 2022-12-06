import { Image, StyleSheet, View } from 'react-native';

import Screen from '@core/layout/screen';
import colors from '@core/configs/colors';

export const Splash = () => {
  return (
    <Screen>
      <View style={styles.scrollView}>
        <View style={styles.container}>
          <Image source={require('../../assets/logo.png')} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    // flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colors.light,
  },
});
