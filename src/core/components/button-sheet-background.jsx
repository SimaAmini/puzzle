import { StyleSheet, View } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

export const BottomSheetBackground = ({ style }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return <View style={[styles.container, style]} />;
};

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 12,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
