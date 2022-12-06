import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Post, ItemSeparator, ActivityIndicator } from '@components';
import Screen from '@layout/screen';
import { useFeed } from './use-feed';

export const Feed = () => {
  const { data, redirectToPostDetail, loadMore } = useFeed();

  return (
    <Screen style={styles.screen}>
      {data ? (
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={data}
          onEndReached={loadMore}
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
          getItemLayout={(data, index) => ({
            length: 450,
            offset: 10 * index,
            index,
          })}
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
