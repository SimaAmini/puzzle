import { Image, StyleSheet, View } from 'react-native';
import colors from '../configs/colors';
import { PostActions } from './post-actions';
import { PostHeader } from './post-header';
import { Text } from './text';

export const Post = () => {
  return (
    <View style={styles.post}>
      <PostHeader />
      <Image
        style={styles.mainImage}
        source={{ uri: 'https://api.lorem.space/image?w=300&h=300' }}
      />
      <PostActions />
      <Text style={styles.caption}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit... more
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.light,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    marginHorizontal: 20,
  },
  caption: {},
  mainImage: {
    height: 300,
    backgroundColor: '#FDD7E4',
    alignSelf: 'stretch',
    textAlign: 'center',
    borderRadius: 10,
  },
});
