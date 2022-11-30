import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

import { PostActions, PostHeader, Text } from '@components';
import Screen from '@layout/screen';
import { usePostDetail } from './use-post-detail';
import colors from '@configs/colors';
import { DefaultImage } from '@components/default-image';

export const PostDetail = () => {
  const { data } = usePostDetail();

  return (
    <Screen>
      {data ? (
        <View style={styles.post}>
          <PostHeader {...data?.user} createdAt={data.createdAt} />
          {data.images ? (
            <Image
              style={styles.mainImage}
              source={{ uri: data.images.large }}
            />
          ) : (
            <DefaultImage style={styles.mainImage} />
          )}

          <PostActions />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.caption}>{data.caption}</Text>
        </View>
      ) : (
        <ActivityIndicator color={colors.primary} />
      )}
    </Screen>
  );
};
const styles = StyleSheet.create({
  post: {
    paddingVertical: 20,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
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
