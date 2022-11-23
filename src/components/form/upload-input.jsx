import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';

import { useValidate } from '@hooks/use-validate';
import colors from '@configs/colors';
import { Text } from '../text';
import { Icon } from '../icon';
import { useFocusEffect } from '@react-navigation/native';

export const UploadInput = (props) => {
  const { validate } = useValidate(props);
  const { control } = useFormContext();
  const { name, label, placeholder, type, disabled, required } = props;

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
      storageOptions: {
        path: 'images',
        includeBase64: true,
      },
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
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };

  const openGallery = async () => {
    let options = {
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
      storageOptions: {
        path: 'images',
        includeBase64: true,
      },
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
        setImageUri(source);
      }
    });
  };

  const ImagePickerModalRef = useRef(null);

  const snapPoints = useMemo(() => ['10%', '20%'], []);

  const handlePresentModalPress = useCallback(() => {
    ImagePickerModalRef.current?.present();
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
      rules={{ validate }}
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
              <Image source={imageUri} style={styles.imagePreview} />
              <TouchableHighlight
                style={styles.iconContainer}
                onPress={handlePresentModalPress}
              >
                <Icon name="plus" size={25} color={colors.primary} />
              </TouchableHighlight>
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
          </View>
        </>
      )}
    />
  );
};

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
