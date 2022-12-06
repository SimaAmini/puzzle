import {
  ActivityIndicator,
  TouchableOpacity as RNButton,
  StyleSheet,
  View,
} from 'react-native';

import colors from '@core/configs/colors';

import { Text } from './text';

export const Button = (props) => {
  const { children, disabled, title, icon, style, onPress, loading } = props;
  // TODO:
  if (icon) {
    return (
      <RNButton
        title={title}
        disabled={disabled}
        style={[styles.button, style]}
        onPress={onPress}
      >
        {/* icon */}
        <Text style={styles.buttonText}>{children}</Text>
      </RNButton>
    );
  }
  return (
    <RNButton
      title={title}
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            color={colors.white}
            animating={loading}
            style={styles.spinner}
          />
        )}
        <Text style={styles.buttonText}>{children}</Text>
      </View>
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
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  spinner: {
    marginRight: 10,
  },
});
