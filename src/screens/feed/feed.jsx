import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Post } from '../../components';
import { ItemSeparator } from '../../components/item-separator';
import Screen from '../../layout/screen';

export default Feed = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={[{}, {}, {}, {}, {}]}
        renderItem={({ item }) => (
          <TouchableHighlight key={item.key} onPress={() => console.log(item)}>
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
