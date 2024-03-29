import { forwardRef, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import { BottomSheetBackground, Icon, Text } from '@core/components';
import { useAuth } from '@core/hooks/use-auth';

import { screens } from '@constants';

export const SettingsModal = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ['10%', '20%'], []);
  const navigation = useNavigation();
  const { dismiss } = useBottomSheetModal();
  const { removeUser, removeToken } = useAuth();

  const logout = () => {
    removeUser();
    removeToken();
  };

  const redirectToSettingsPage = () => {
    navigation.navigate(screens.SETTINGS);
    dismiss();
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      //   onChange={handleSheetChanges}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
    >
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={redirectToSettingsPage}>
          <View style={styles.button}>
            <Icon name="settings" />
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <View style={styles.button}>
            <Icon name="lock" />
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 10,
  },
});
