import { ActivityIndicator as Loading, StyleSheet, View } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

export const ActivityIndicator = (props) => {
  const { getColors } = useTheme();
  const colors = getColors();

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
