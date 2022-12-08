import { Text as RNText, StyleSheet } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

export const Text = ({ children, style, ...rest }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.dark,
      fontFamily: 'Poppins',
    },
  });
