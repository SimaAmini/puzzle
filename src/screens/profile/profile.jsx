import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import { ProfileHeader } from '@components/profile-header';
import { Icon } from '@components';
import { screens } from '@constants';

import Screen from '@layout/screen';
import { SettingsModal } from '@components/settings-modal';

export const Profile = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        bottomSheetModalRef.current?.dismiss();
      };
    }, []),
  );

  return (
    <Screen>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={handlePresentModalPress}
        style={{
          alignItems: 'flex-end',
          marginRight: 20,
          padding: 5,
        }}
      >
        <Icon name="settings" />
      </TouchableHighlight>
      <SettingsModal ref={bottomSheetModalRef} />

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
