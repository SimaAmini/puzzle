import { StyleSheet, View } from 'react-native';

import colors from '@core/configs/colors';

import { Icon } from './icon';
import { Text } from './text';

export const PostActions = () => {
  return (
    <View style={styles.actions}>
      <View style={styles.leftIcons}>
        <View style={styles.comment}>
          <Icon name="message-circle" size={20} color={colors.dark} />
          <Text style={styles.number}>427</Text>
        </View>
        <View style={styles.view}>
          <Icon name="eye" size={20} color={colors.dark} />
          <Text style={styles.number}>54</Text>
        </View>
      </View>
      <View>
        <Icon name="bookmark" size={20} color={colors.dark} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  likes: {
    fontSize: 14,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  comment: {
    flexDirection: 'row',
  },
  view: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  number: {
    marginLeft: 5,
  },
});
