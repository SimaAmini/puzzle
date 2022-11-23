import { forwardRef, useMemo, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';

import { Text } from './text';
import { Icon } from './icon';
import colors from '@configs/colors';
import { screens } from '@constants';
import { useNavigation } from '@react-navigation/native';

export const SettingsModal = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ['10%', '20%'], []);
  const navigation = useNavigation();
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      //   onChange={handleSheetChanges}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
    >
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.SETTINGS);
            dismiss();
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Icon name="settings" />
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              Settings
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('logged out')}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Icon name="lock" />
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});
const BottomSheetBackground = ({ style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        { ...style },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  box: {
    backgroundColor: '#F2F2F2',
    height: 140,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#e6e5e5',
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  label: {
    color: colors.black,
    marginBottom: 5,
    fontSize: 14,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
