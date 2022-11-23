import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Post, ItemSeparator } from '@components';
import Screen from '@layout/screen';
import { screens } from '@constants';

export const Feed = () => {
  const navigation = useNavigation();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        renderItem={({ item }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => navigation.navigate(screens.POST_DETAIL)}
            activeOpacity={1}
            underlayColor="transparent"
          >
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
