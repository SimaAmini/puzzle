import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { ProfileHeader } from '../../components/profile-header';
import Screen from '../../layout/screen';

export default Profile = () => {
  const [dataSource, setDataSource] = useState([{}, {}, {}, {}, {}, {}]);

  return (
    <Screen>
      <ProfileHeader />
      <View style={styles.scrollView}>
        {/* header */}
        {/* my posts */}
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
              <Image
                style={styles.imageThumbnail}
                source={{
                  uri: 'https://api.lorem.space/image/watch?w=150&h=150',
                }}
              />
            </View>
          )}
          //Setting the number of column
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
