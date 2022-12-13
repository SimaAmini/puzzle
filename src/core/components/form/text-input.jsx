import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';

import { useTheme } from '@core/hooks/use-theme';

import { Text } from '../text';

export const TextInput = (props) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const {
    name,
    label,
    placeholder,
    type,
    disabled,
    required,
    multiline,
    numberOfLines = multiline ? 4 : 1,
    control,
    rules = {},
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
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
          {error && (
            <Text style={styles.errorMessage}>{error.message || 'Error'}</Text>
          )}
        </View>
      )}
    />
  );
};

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    label: {
      color: colors.black,
      marginBottom: 5,
      fontSize: 14,
    },
    input: {
      // padding: 10,
      borderColor: colors.gray,
      backgroundColor: colors.gray,
      minHeight: 40,
      borderWidth: 1,
      borderRadius: 10,
      // marginBottom: 5,
      paddingHorizontal: 10,
      // alignSelf: 'stretch',
      color: 'black',
    },
    errorMessage: {
      color: colors.danger,
      alignSelf: 'stretch',
    },
  });
