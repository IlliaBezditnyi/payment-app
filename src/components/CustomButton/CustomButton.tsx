import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {CustomButtonProps} from '../../types';

const CustomButton: FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#212121',
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
