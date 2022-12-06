import { Text as RNText, StyleSheet } from 'react-native';

import colors from '@core/configs/colors';

export const Text = ({ children, style, ...rest }) => {
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontFamily: 'Poppins',
  },
});
