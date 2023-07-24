import React, {FC} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import CustomButton from '../CustomButton';
import {ConfirmTransferContentProps} from '../../types';

const ConfirmTransferContent: FC<ConfirmTransferContentProps> = ({card, sum, onCancelPress, onPaySubmit}) => {
  return (
    <View>
      <View style={styles.icon}>
        <Image source={require('../../../assets/images/money_modal_icon.png')} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm transfer</Text>
        <View style={styles.cardWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={require('../../../assets/images/master_card_icon.png')} />
            <Text style={{fontSize: 14, fontWeight: '400', color: '#000'}}>{card}</Text>
          </View>
          <Text style={styles.title}>${sum}</Text>
        </View>
        <Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.
        </Text>
      </View>
      <Pressable style={styles.cancelButton} onPress={onCancelPress}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#000'}}>Cancel</Text>
      </Pressable>
      <CustomButton title={`Pay $${sum}`} onPress={onPaySubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    gap: 10
  },
  icon: {
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#8e8e8e'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5f6368'
  },
  cancelButton: {
    alignItems: 'center',
    marginBottom: 15
  }
})

export default ConfirmTransferContent;
