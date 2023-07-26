import React, {FC} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Modal from "react-native-modal";
import { TransactionModalProps } from '../../types';

const TransactionModal: FC<TransactionModalProps> = ({isVisible, onBackdropPress}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      backdropOpacity={0.2}
      style={styles.modal}
    >
      <View style={styles.content}>
        <Image source={require('../../../assets/images/transaction_modal_icon.png')} />
        <Text style={styles.contentText}>Transaction processing...</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30
  },
  contentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default TransactionModal
