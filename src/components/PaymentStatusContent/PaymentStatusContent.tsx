import React, {FC} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {PaymentStatusContentProps} from '../../types';

const PaymentStatusContent: FC<PaymentStatusContentProps> = ({icon, title, description}) => {
  return (
    <View style={styles.root}>
      <View>
        <Image source={icon} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center'
  },
  container: {
    paddingVertical: 30,
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000'
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000'
  }
})

export default PaymentStatusContent;