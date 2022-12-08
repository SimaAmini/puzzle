import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Button, Text, TitleText } from '@core/components';
import { TextInput } from '@core/components/form/text-input';
import { useTheme } from '@core/hooks/use-theme';
import Screen from '@core/layout/screen';

import { useLogin } from './use-login';

export const Login = () => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const { onSubmit, isLoading, redirectToRegister } = useLogin();

  const { control, handleSubmit } = useForm();

  return (
    <Screen>
      <View style={styles.scrollView}>
        <TitleText>Login To your Account</TitleText>
        <TextInput
          name="userName"
          label="User Name"
          control={control}
          rules={{ required: 'User name is required' }}
          required
        />

        <TextInput
          name="password"
          label="Password"
          type="password"
          control={control}
          required
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </Button>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Do not have an Account?</Text>
          <TouchableOpacity onPress={redirectToRegister}>
            <Text style={[styles.text, styles.link]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
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
