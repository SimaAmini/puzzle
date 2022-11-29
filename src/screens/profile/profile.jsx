import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
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
import { useProfile } from './use-profile';
import colors from '@configs/colors';

export const Profile = () => {
  const { data, username, email } = useProfile();

  const navigation = useNavigation();

  const redirectToPostDetail = (id) => {
    return navigation.navigate(screens.POST_DETAIL, {
      postId: id,
    });
  };
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
      {/* <View style={styles.scrollView}> */}
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

      <ProfileHeader username={username} email={email} />
      {data ? (
        <FlatList
          data={data}
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
                onPress={() => redirectToPostDetail(item.id)}
                activeOpacity={1}
                underlayColor="transparent"
              >
                {item.images ? (
                  <Image
                    style={styles.imageThumbnail}
                    source={{
                      uri: 'https://api.lorem.space/image/book?w=220&h=220',
                    }}
                  />
                ) : (
                  <Image
                    style={styles.imageThumbnail}
                    source={{
                      uri: 'https://api.lorem.space/image?w=300&h=300',
                    }}
                  />
                )}
              </TouchableHighlight>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <ActivityIndicator color={colors.primary} />
      )}
      {/* </View> */}
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
