import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {CustomButtonProps} from '../../types';

const CustomButton: FC<CustomButtonProps> = ({title, onPress, disabled}) => {
  return (
    <Pressable
        disabled={disabled}
        style={({ pressed }) => [
          {
            backgroundColor:
                disabled? '#8b8888' :
                pressed
                ? '#575454'
                : '#212121'
          },
          styles.button
        ]}
        onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
