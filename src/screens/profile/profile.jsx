import { useCallback, useRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { SettingsModal, DefaultImage, Icon, ProfileHeader } from '@components';
import Screen from '@layout/screen';
import colors from '@configs/colors';
import { screens } from '@constants';
import { useProfile } from './use-profile';

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
                      uri: item.images.medium,
                    }}
                  />
                ) : (
                  <DefaultImage style={styles.imageThumbnail} />
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
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
