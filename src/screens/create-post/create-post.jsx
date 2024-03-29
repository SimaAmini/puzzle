import { StyleSheet, View } from 'react-native';

import { Button, UploadInput } from '@core/components';
import { TextInput } from '@core/components/form/text-input';
import Screen from '@core/layout/screen';

import { useCreatePost } from './use-create-post';

export const CreatePost = () => {
  const { onSubmit, isLoading, control, handleSubmit, setValue } =
    useCreatePost();

  return (
    <Screen>
      <View style={styles.scrollView}>
        <TextInput
          name="title"
          label="Title"
          control={control}
          required
          rules={{
            required: 'Title is required',
            minLength: {
              value: 6,
              message: 'Title should be minimum 6 characters long',
            },
          }}
        />
        <UploadInput
          name="image"
          label="Select image"
          control={control}
          setValue={setValue}
          required
          rules={{ required: 'Image is required' }}
        />
        <TextInput
          name="caption"
          label="Add caption"
          required
          multiline
          control={control}
          rules={{
            required: 'Caption is required',
            minLength: {
              value: 6,
              message: 'Caption should be minimum 6 characters long',
            },
          }}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          disabled={isLoading}
        >
          Upload
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    flexGrow: 1,
  },
});
