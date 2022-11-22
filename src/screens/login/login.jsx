import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Form, TitleText } from '../../components';
import { TextInput } from '../../components/form/text-input';
import Screen from '../../layout/screen';
import { screens } from '../../constants';

export const Login = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.scrollView}>
        <TitleText>Login To your Account</TitleText>
        <Form>
          <TextInput name="email" label="Email" type="email" required />
          <TextInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <Button
            onPress={() =>
              navigation.navigate(screens.MAIN_TABS, { screen: screens.HOME })
            }
          >
            Login
          </Button>
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
