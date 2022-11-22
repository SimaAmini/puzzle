import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import { ProfileHeader } from '../../components/profile-header';
import { screens } from '../../constants';
import Screen from '../../layout/screen';

export const Profile = () => {
  const [dataSource, setDataSource] = useState([{}, {}, {}, {}, {}, {}]);

  const navigation = useNavigation();

  return (
    <Screen>
      <ProfileHeader />
      <View style={styles.scrollView}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1,
              }}
            >
              <TouchableHighlight
                key={item.id}
                onPress={() => navigation.navigate(screens.POST_DETAIL)}
                activeOpacity={1}
                underlayColor="transparent"
              >
                <Image
                  style={styles.imageThumbnail}
                  source={{
                    uri: 'https://api.lorem.space/image/watch?w=150&h=150',
                  }}
                />
              </TouchableHighlight>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
