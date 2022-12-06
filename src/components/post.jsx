import { Image, StyleSheet, View } from 'react-native';

import { DefaultImage } from './default-image';
import { PostActions } from './post-actions';
import { PostHeader } from './post-header';
import { Text } from './text';
import { Truncate } from './truncate';

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
      <Truncate style={styles.caption}>{caption}</Truncate>
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    paddingVertical: 20,
    height: 450,
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
