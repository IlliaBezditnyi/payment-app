import React, {FC, useState, useCallback} from 'react';
import { StyleSheet, View } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BottomModal from '../../components/BottomModal/BottomModal';
import ConfirmTransferContent from '../../components/ConfirmTransferContent';
import PaymentStatusContent from '../../components/PaymentStatusContent';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

const CardDetailsScreen: FC = () => {
  const [cardNumber, setCardNumber] = useState<number>();
  const [expiryDate, setExpiryDate] = useState<number>();
  const [securityCode, setSecurityCode] = useState<number>();
  const [cardholderName, setCardholderName] = useState<string>();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isPaymentButtonPress, setIsPaymentButtonPress] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onContinueButtonPress = useCallback(() => {
    setIsOpenModal(true);
  }, [])

  const onModalClose = useCallback(() => {
    setIsOpenModal(false);
  }, [])

  const onPaySubmit = () => {
    onModalClose();
    setIsPaymentButtonPress(true);
  }

  const handleCardNumber = (number: any) => {
    setCardNumber(number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').substr(0, 20).trim());
  }

  const handleExpiryDate = (date: any) => {
    setExpiryDate(date.replace(/\W/gi, '').replace(/(.{2})/g, '$1/').substring(0, 5));
  }

  const snapPointModal = ["55%"];
  const snapPointPayment = ["35"];

  return (
    <View style={{flex: 1}}>
      <View style={
        [styles.root, {opacity: isOpenModal ? 0.2 : 1, backgroundColor: isOpenModal ? 'grey' : '#f7f6f2' }]
      }>
        <View style={styles.inputs}>
          <CustomInput
            value={cardNumber}
            onChahge={handleCardNumber}
            inputName='Card Number'
            placeholder='0000 0000 0000 0000'
            keyboardType='numeric'
          />
          <View style={styles.container}>
            <View style={{flex: 1}}>
              <CustomInput
                value={expiryDate}
                onChahge={handleExpiryDate}
                inputName='Expiry date'
                placeholder='MM\YY'
                keyboardType='numeric'
              />
            </View>
            <View style={{flex: 1}}>
              <CustomInput
                value={securityCode}
                onChahge={setSecurityCode}
                inputName='Security code'
                placeholder='CVC\CVV'
                keyboardType='numeric'
              />
            </View>
          </View>
          <CustomInput
            value={cardholderName}
            onChahge={setCardholderName}
            inputName='Cardholder name'
            placeholder='Enter cardholder full name'
          />
        </View>
        <CustomButton title="Continue" onPress={onContinueButtonPress} />
      </View>

      {isOpenModal &&
        <BottomModal snapPoint={snapPointModal} onCloseModal={onModalClose}>
          <View style={{paddingHorizontal: 15, paddingTop: 20}}>
            <ConfirmTransferContent
              card={cardNumber}
              sum={250}
              onCancelPress={onModalClose}
              onPaySubmit={onPaySubmit}
            />
          </View>
        </BottomModal>
      }

      {isPaymentButtonPress &&
        <BottomModal snapPoint={snapPointPayment} onCloseModal={onModalClose}>
          <View style={{paddingHorizontal: 15, paddingTop: 20}}>
            <PaymentStatusContent
              icon={paymentSuccess ?
                (
                  require('../../../assets/images/money_modal_icon.png')
                ) :
                  require('../../../assets/images/payment_failure_icon.png')
              }
              title={paymentSuccess ? 'The payment was successful' : 'The payment did not go through'}
              description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
            />
          </View>
        </BottomModal>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  inputs: {
    gap: 20
  },
  container: {
    flexDirection: 'row',
    gap: 10
  }
})

export default CardDetailsScreen;