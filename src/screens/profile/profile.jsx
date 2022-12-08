import { useCallback, useRef } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ActivityIndicator, DefaultImage, Icon } from '@core/components';
import { useTheme } from '@core/hooks/use-theme';
import Screen from '@core/layout/screen';

import { screens } from '@constants';

import { ProfileHeader, SettingsModal } from './components';
import { useProfile } from './use-profile';

export const Profile = () => {
  const { data, username, email, refetch, isLoading } = useProfile();

  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = makeStyles(colors);

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
      <TouchableHighlight
        underlayColor="transparent"
        onPress={handlePresentModalPress}
        style={styles.iconContainer}
      >
        <Icon name="settings" />
      </TouchableHighlight>
      <SettingsModal ref={bottomSheetModalRef} />

      <ProfileHeader username={username} email={email} />
      {data ? (
        <FlatList
          data={data}
          onRefresh={refetch}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
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
                      uri: item.images.url,
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
        <ActivityIndicator />
      )}
    </Screen>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
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
    iconContainer: {
      alignItems: 'flex-end',
      marginRight: 20,
      padding: 5,
    },
    itemContainer: {
      flex: 1 / 3,
      margin: 1,
    },
  });
