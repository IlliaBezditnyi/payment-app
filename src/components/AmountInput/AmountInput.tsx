import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import {AmountInputProps} from '../../types';

const AmountInput: FC<AmountInputProps> = ({inputName, value, onChange}) => {
  return (
    <View>
      <Text style={styles.label}>{inputName}</Text>
      <CurrencyInput
        value={value}
        onChangeValue={onChange}
        prefix="$"
        delimiter=""
        separator="."
        precision={2}
        style={styles.field}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  field: {
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
});

export default AmountInput;