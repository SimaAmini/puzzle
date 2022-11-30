import { Image, StyleSheet, View } from 'react-native';

import { DefaultImage } from './default-image';
import { PostActions } from './post-actions';
import { PostHeader } from './post-header';
import { Text } from './text';

export const Post = ({ user, caption, title, createdAt, images }) => {
  return (
    <View style={styles.post}>
      <PostHeader {...user} createdAt={createdAt} />
      {images ? (
        <Image style={styles.mainImage} source={{ uri: images.medium }} />
      ) : (
        <DefaultImage style={styles.mainImage} />
      )}
      <PostActions />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    // backgroundColor: colors.light,
    paddingVertical: 20,
    // paddingHorizontal: 20,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: colors.gray,
    // marginHorizontal: 20,
  },
  caption: {
    paddingHorizontal: 10,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  mainImage: {
    height: 300,
  },
});
