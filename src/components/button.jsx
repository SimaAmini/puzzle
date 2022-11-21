import { TouchableOpacity as RNButton, StyleSheet } from 'react-native';
import colors from '../configs/colors';
import { Text } from './text';

export const Button = (props) => {
  const { children, disabled, title, icon, style } = props;
  if (icon) {
    return (
      <RNButton title={title} disabled={disabled} style={styles.button}>
        {/* icon */}
        <Text style={styles.buttonText}>{children}</Text>
      </RNButton>
    );
  }
  return (
    <RNButton title={title} disabled={disabled} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </RNButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
