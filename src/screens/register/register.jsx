import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Form, TitleText, Text } from '@components';
import { TextInput } from '@components/form/text-input';
import Screen from '@layout/screen';
import { useAuthStore } from '@hooks/use-auth-store';
import { screens } from '@constants';
import colors from '@configs/colors';

export const Register = () => {
  const navigation = useNavigation();
  const authenticate = useAuthStore((state) => state.authenticate);

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
          <Button
            onPress={async () => {
              await authenticate();
              navigation.navigate(screens.MAIN_TABS);
            }}
          >
            Create Account
          </Button>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(screens.LOGIN)}
            >
              <Text style={[styles.text, styles.link]}>Log in</Text>
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
