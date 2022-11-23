import { StyleSheet, View } from 'react-native';

import { Button, Form, TitleText } from '@components';
import { TextInput } from '@components/form/text-input';
import Screen from '@layout/screen';

export const Register = () => {
  return (
    <Screen>
      <View style={styles.scrollView}>
        <TitleText>Create Your Account</TitleText>
        <Form>
          <TextInput name="email" label="Email" type="email" required />
          <TextInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <TextInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />
          <Button>Create Account</Button>
        </Form>
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
