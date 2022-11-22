import { TouchableOpacity as RNButton, StyleSheet } from 'react-native';
import colors from '../configs/colors';
import { Text } from './text';
import MainIcon from 'react-native-vector-icons/Feather';

export const Icon = (props) => {
  const { disabled, title, icon, style, onPress } = props;

  return (
    <MainIcon
      name="message-circle"
      size={20}
      color={colors.dark}
      style={[styles.button, style]}
    />
  );
};

const styles = StyleSheet.create({});
