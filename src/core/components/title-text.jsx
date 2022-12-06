import { Text as RNText, StyleSheet } from 'react-native';

import colors from '@core/configs/colors';

export const TitleText = ({ children, style }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 50,
    // fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Poppins-Bold',
  },
});
