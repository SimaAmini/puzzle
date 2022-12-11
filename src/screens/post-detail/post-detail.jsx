import { Image, StyleSheet, View } from 'react-native';

import {
  ActivityIndicator,
  PostActions,
  PostHeader,
  Text,
} from '@core/components';
import { DefaultImage } from '@core/components/default-image';
import Screen from '@core/layout/screen';

import { usePostDetail } from './use-post-detail';

export const PostDetail = () => {
  const { data } = usePostDetail();
  return (
    <Screen>
      {data ? (
        <View style={styles.post}>
          <PostHeader {...data?.user} createdAt={data.createdAt} />
          {data.images ? (
            <Image style={styles.mainImage} source={{ uri: data.images.url }} />
          ) : (
            <DefaultImage style={styles.mainImage} />
          )}

          <PostActions />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.caption}>{data.caption}</Text>
        </View>
      ) : (
        <ActivityIndicator />
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
