import { useCallback } from 'react';
import { Alert, Linking, StyleSheet, TouchableOpacity } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

import { Text } from './text';

export const Link = ({ url, children }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    link: {
      color: colors.primary,
    },
  });
