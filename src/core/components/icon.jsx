import { StyleSheet } from 'react-native';
import MainIcon from 'react-native-vector-icons/Feather';
import colors from '@core/configs/colors';

export const Icon = (props) => {
  const { name, size = 20, color = colors.dark, style } = props;

  return (
    <MainIcon
      name={name}
      size={size}
      color={color}
      style={[styles.button, style]}
    />
  );
};

const styles = StyleSheet.create({});
