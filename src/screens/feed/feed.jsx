import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Post, ItemSeparator } from '../../components';
import Screen from '../../layout/screen';

export const Feed = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        renderItem={({ item }) => (
          <TouchableHighlight key={item.id} onPress={() => console.log(item)}>
            <Post />
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    // paddingHorizontal: 10,
  },
});
