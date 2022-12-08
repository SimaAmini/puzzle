import { Image, StyleSheet, View } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';
import Screen from '@core/layout/screen';

export const Splash = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

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

const makeStyles = (colors) =>
  StyleSheet.create({
    scrollView: {
      flex: 1,
      justifyContent: 'center',
      // flexGrow: 1,
      alignItems: 'center',
      backgroundColor: colors.light,
    },
  });
