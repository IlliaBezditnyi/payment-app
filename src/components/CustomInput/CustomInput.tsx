import {View, TextInput, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {CustomInputProps} from '../../types';

const CustomInput: FC<CustomInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
  formatter,
  maxLength,
  multiline,
  numberOfLines
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#fff'},
            ]}>
            <TextInput
              value={value}
              onChangeText={(text) => {
                const formatted = formatter ? formatter(value, text) : text
                onChange(formatted)
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              keyboardType={keyboardType}
              maxLength={maxLength}
              multiline={multiline}
              numberOfLines={numberOfLines}
            />
          </View>
          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 20,
  },
  error: {
    color: 'red',
    alignSelf: 'stretch',
  },
});

export default CustomInput;