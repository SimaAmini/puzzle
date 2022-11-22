import { StyleSheet, View } from 'react-native';
import { Button, Form, UploadInput } from '../../components';

import { TextInput } from '../../components/form/text-input';
import Screen from '../../layout/screen';

export const CreatePost = () => {
  return (
    <Screen>
      <View style={styles.scrollView}>
        <Form>
          <UploadInput name="image" label="Select image" required />
          <TextInput name="caption" label="Add caption" required multiline />
          <TextInput name="hashtags" label="Add hashtags" />
          <Button>Upload</Button>
        </Form>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    // justifyContent: 'center',
    flexGrow: 1,
  },
});
