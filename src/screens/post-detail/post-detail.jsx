import { Image, StyleSheet, View } from 'react-native';

import { PostActions, PostHeader, Text } from '@components';
import Screen from '@layout/screen';

export const PostDetail = () => {
  return (
    <Screen>
      <View style={styles.post}>
        <PostHeader />
        <Image
          style={styles.mainImage}
          source={{ uri: 'https://api.lorem.space/image?w=300&h=300' }}
        />
        <PostActions />
        <Text style={styles.caption}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          porro ab quod, aut accusamus ut ullam! Accusamus eos eligendi earum
          unde aspernatur, laudantium quod repellendus molestias ratione minus
          dignissimos labore.
        </Text>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  post: {
    paddingVertical: 20,
  },
  caption: {
    paddingHorizontal: 10,
  },
  mainImage: {
    height: 300,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
