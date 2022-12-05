import { View, StyleSheet, ActivityIndicator as Loading } from 'react-native';
import colors from '@configs/colors';

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
