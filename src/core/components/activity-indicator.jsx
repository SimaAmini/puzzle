import { ActivityIndicator as Loading, StyleSheet, View } from 'react-native';

import colors from '@core/configs/colors';

export const ActivityIndicator = (props) => {
  return (
    <View style={styles.overlay}>
      {/*  TODO: could be replaced with a logo */}
      <Loading color={colors.primary} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
