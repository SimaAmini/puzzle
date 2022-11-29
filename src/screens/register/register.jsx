import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';

import { Button, TitleText, Text } from '@components';
import { TextInput } from '@components/form/text-input';
import Screen from '@layout/screen';
import colors from '@configs/colors';
import { useRegister } from './useRegister';

export const Register = () => {
  const { onSubmit, redirectToLogin } = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Screen>
      <View style={styles.scrollView}>
        <TitleText>Create Your Account</TitleText>
        <TextInput
          name="email"
          label="Email"
          type="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          }}
          keyboardType="email-address"
          required
        />
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
          required
        />
        {/* <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          control={control}
          rules={{
            required: 'Confirm Password is required',
            minLength: {
              value: 3,
              message: 'Confirm Password should be minimum 3 characters long',
            },
          }}
          required
        /> */}
        <Button onPress={handleSubmit(onSubmit)}>Create Account</Button>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an Account?</Text>
          <TouchableOpacity onPress={redirectToLogin}>
            <Text style={[styles.text, styles.link]}>Log in</Text>
          </TouchableOpacity>
        </View>
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
