import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SelectButtonProps} from '../../types';

const CustomButton: FC<SelectButtonProps> = ({
  buttonName,
  title,
  subtitle,
  onPress,
  mainIcon,
  checkIcon
}) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.container}>
          <Image source={mainIcon} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <View>
          <Image source={checkIcon} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    marginBottom: 5,
    fontSize: 16,
    color: '#000'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: '#000'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400"
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
});

export default CustomButton;