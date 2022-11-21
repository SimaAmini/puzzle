import { Image, StyleSheet } from 'react-native';
import colors from '../configs/colors';

export const Avatar = ({ style }) => {
  return (
    <Image
      source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }}
      style={[styles.avatar, style]}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.light,
  },
});
