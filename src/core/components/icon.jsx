import MainIcon from 'react-native-vector-icons/Feather';

import { useTheme } from '@core/hooks/use-theme';

export const Icon = (props) => {
  const { colors } = useTheme();
  const { name, size = 20, color = colors.dark, style } = props;

  return <MainIcon name={name} size={size} color={color} style={style} />;
};
