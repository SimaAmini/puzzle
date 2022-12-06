import colors from '@core/configs/colors';
import { StyleSheet, View } from 'react-native';
import { Text } from '.';

export const DefaultImage = ({ style }) => {
  return (
    <View style={[styles.image, style]}>
      <Text style={styles.text}>No image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
