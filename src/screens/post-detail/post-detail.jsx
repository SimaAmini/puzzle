import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { Text } from '../../components';
import { PostActions } from '../../components/post-actions';
import { PostHeader } from '../../components/post-header';
import colors from '../../configs/colors';
import Screen from '../../layout/screen';

export default PostDetail = () => {
  return (
    <Screen style={styles.screen}>
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
  screen: {
    backgroundColor: colors.light,
  },
  post: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: colors.gray,
    // marginHorizontal: 20,
  },
  caption: {},
  mainImage: {
    height: 300,
    backgroundColor: '#FDD7E4',
    alignSelf: 'stretch',
    textAlign: 'center',
    borderRadius: 10,
  },
});
