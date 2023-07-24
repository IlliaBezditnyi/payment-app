import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native'
import React, {FC} from 'react'
import {CustomInputProps} from '../../types';

const CustomInput: FC<CustomInputProps> = ({
  value,
  onChahge,
  inputName,
  onFocus,
  multiline,
  numberOfLines,
  placeholder,
  maxLength,
  keyboardType
}) => {
  return (
    <View>
      <Text style={styles.label}>{inputName}</Text>
      <TextInput
        value={value}
        onChangeText={onChahge}
        placeholder={placeholder}
        multiline
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onFocus={onFocus}
        keyboardType={keyboardType}
        autoCorrect={false}
        style={styles.field} />
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
    textAlignVertical: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 20,
  },
});

export default CustomInput;
