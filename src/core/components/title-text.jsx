import { Text as RNText, StyleSheet } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

export const TitleText = ({ children, style }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const makeStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.dark,
      fontSize: 50,
      // fontWeight: 'bold',
      marginBottom: 30,
      fontFamily: 'Poppins-Bold',
    },
  });
