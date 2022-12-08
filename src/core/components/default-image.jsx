import { StyleSheet, View } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

import { Text } from '.';

export const DefaultImage = ({ style }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <View style={[styles.image, style]}>
      <Text style={styles.text}>No image</Text>
    </View>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    image: {
      backgroundColor: colors.gray,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
    },
  });
