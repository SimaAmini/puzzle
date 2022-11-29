import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Post, ItemSeparator, ActivityIndicator } from '@components';
import Screen from '@layout/screen';
import { useFeed } from './use-feed';

export const Feed = () => {
  const { data, redirectToPostDetail } = useFeed();
  return (
    <Screen style={styles.screen}>
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableHighlight
              key={item.id}
              onPress={() => redirectToPostDetail(item.id)}
              activeOpacity={1}
              underlayColor="transparent"
            >
              <Post {...item} />
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparator}
        />
      ) : (
        <ActivityIndicator />
      )}
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    // paddingHorizontal: 10,
  },
});
