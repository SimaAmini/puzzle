import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

import { Controller, useFormContext } from 'react-hook-form';

import { useValidate } from '@hooks/use-validate';
import colors from '@configs/colors';
import { Text } from '../text';

export const TextInput = (props) => {
  const { validate } = useValidate(props);
  const { control } = useFormContext();
  const {
    name,
    label,
    placeholder,
    type,
    disabled,
    required,
    multiline,
    numberOfLines = multiline ? 4 : 0,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View>
          {label &&
            (required ? (
              <Text style={styles.label}>{label} *</Text>
            ) : (
              <Text style={styles.label}>{label}</Text>
            ))}

          <RNTextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            editable={!disabled}
            secureTextEntry={type === 'password'}
            placeholder={placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.black,
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
  },
});
