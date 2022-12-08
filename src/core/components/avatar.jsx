import { Image, StyleSheet } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

export const Avatar = ({ style }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <Image
      source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }}
      style={[styles.avatar, style]}
    />
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    avatar: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: colors.light,
    },
  });
