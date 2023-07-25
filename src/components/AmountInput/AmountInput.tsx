import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import {Controller} from 'react-hook-form';
import {CustomInputProps} from '../../types';

const AmountInput: FC<CustomInputProps> = ({
  control,
  name,
  rules = {}
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
            {borderColor: error ? 'red' : '#000'},
          ]}>
          <CurrencyInput
            value={value}
            onChangeValue={onChange}
            prefix="$"
            delimiter=""
            separator="."
            precision={2}
            style={{fontSize: 14, fontWeight: '500'}}
          />
        </View>
        {error && (
          <Text style={styles.error}>{error.message || 'Error'}</Text>
        )}
      </>
    )}
  />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 20
  },
  error: {
    color: 'red',
    alignSelf: 'stretch'
  },
});

export default AmountInput;