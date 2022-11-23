import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuthStore } from '@hooks/use-auth-store';
import { Form, TitleText, Text, Button } from '@components';
import { TextInput } from '@components/form/text-input';
import Screen from '@layout/screen';
import { screens } from '@constants';
import colors from '@configs/colors';

export const Login = () => {
  const navigation = useNavigation();
  const authenticate = useAuthStore((state) => state.authenticate);

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
            onPress={async () => {
              await authenticate();
              navigation.navigate(screens.MAIN_TABS);
            }}
          >
            Login
          </Button>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Do not have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.REGISTER)}
            >
              <Text style={[styles.text, styles.link]}>Register</Text>
            </TouchableOpacity>
          </View>
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
  textContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
