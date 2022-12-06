import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';

import { BottomSheetBackground } from '@core/components/button-sheet-background';
import colors from '@core/configs/colors';

import { Icon } from '../icon';
import { Text } from '../text';

export const UploadInput = (props) => {
  const {
    name,
    label,
    placeholder,
    type,
    disabled,
    required,
    control,
    rules = {},
    setValue,
  } = props;

  const [imageUri, setImageUri] = useState('');
  const { dismiss } = useBottomSheetModal();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    let options = {
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
    };

    await launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        dismiss();
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log('response', response);
        const source = { uri: response.assets[0].uri };

        setValue(name, response.assets[0], { shouldDirty: true });

        setImageUri(source);
      }
    });
  };

  const openGallery = async () => {
    let options = {
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
    };

    await launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        dismiss();
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        setValue(name, response.assets[0], { shouldDirty: true });

        setImageUri(source);
      }
    });
  };

  const ImagePickerModalRef = useRef(null);

  const snapPoints = useMemo(() => ['10%', '20%'], []);

  const handlePresentModalPress = useCallback(() => {
    ImagePickerModalRef.current?.present();
  }, []);

  const handleRemoveImage = useCallback(() => {
    setImageUri('');
    setValue(name, '', { shouldDirty: true });
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        ImagePickerModalRef.current?.dismiss();
      };
    }, []),
  );

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View>
            {label &&
              (required ? (
                <Text style={styles.label}>{label} *</Text>
              ) : (
                <Text style={styles.label}>{label}</Text>
              ))}
            <View style={styles.box}>
              <View>
                <Image source={imageUri} style={styles.imagePreview} />
              </View>
              {imageUri ? (
                <TouchableHighlight
                  style={styles.iconContainer}
                  onPress={handleRemoveImage}
                >
                  <Icon name="x" size={25} color={colors.primary} />
                </TouchableHighlight>
              ) : (
                <TouchableHighlight
                  style={styles.iconContainer}
                  onPress={handlePresentModalPress}
                >
                  <Icon name="plus" size={25} color={colors.primary} />
                </TouchableHighlight>
              )}
            </View>

            <BottomSheetModal
              ref={ImagePickerModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundComponent={(props) => (
                <BottomSheetBackground {...props} />
              )}
            >
              <View style={styles.contentContainer}>
                <TouchableOpacity onPress={requestCameraPermission}>
                  <Text>Open Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={openGallery}>
                  <Text>Open Library</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetModal>
            {error && (
              <Text style={styles.errorMessage}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </>
      )}
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
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  errorMessage: {
    color: colors.danger,
    alignSelf: 'stretch',
  },
});
