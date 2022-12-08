import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import { ActivityIndicator, ItemSeparator, Post } from '@core/components';
import Screen from '@core/layout/screen';

import { useFeed } from './use-feed';

export const Feed = () => {
  const { data, redirectToPostDetail, loadMore, refetch, isLoading } =
    useFeed();

  return (
    <Screen style={styles.screen}>
      {data ? (
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          onRefresh={refetch}
          refreshing={isLoading}
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
            offset: 20 * index,
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
