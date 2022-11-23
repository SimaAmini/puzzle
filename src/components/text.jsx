import { StyleSheet, Text as RNText } from 'react-native';
import colors from '@configs/colors';

export const Text = ({ children, style }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
  },
});
