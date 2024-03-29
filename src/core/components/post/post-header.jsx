import { StyleSheet, View } from 'react-native';

import { useDate } from '@core/hooks/use-date';
import { useTheme } from '@core/hooks/use-theme';

import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { Text } from '../text';

export const PostHeader = ({ username, createdAt }) => {
  const { colors } = useTheme();

  const styles = makeStyles(colors);

  const { fromNow } = useDate();
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar />
        <View style={styles.texts}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.time}>{fromNow(createdAt)}</Text>
        </View>
      </View>
      <View>
        <Icon name="more-vertical" size={20} color={colors.dark} />
      </View>
    </View>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      height: 70,
    },
    user: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
    },
    texts: {
      marginLeft: 5,
    },
    userName: {
      fontWeight: '400',
    },
    time: {
      color: colors.medium,
    },
  });
