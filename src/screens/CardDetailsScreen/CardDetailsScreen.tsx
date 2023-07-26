import React, {FC, useState, useCallback, useRef} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BottomModal from '../../components/BottomModal/BottomModal';
import ConfirmTransferContent from '../../components/ConfirmTransferContent';
import PaymentStatusContent from '../../components/PaymentStatusContent';
import {useForm} from 'react-hook-form';
import {
  cardNumberFormatter,
  expirationDateFormatter,
} from '../../utils/formatters';

const CardDetailsScreen: FC = () => {
  const {control, handleSubmit, formState, watch} = useForm({
    defaultValues: {
      cardNumber: '',
      expiryDate: ''
    },
    mode: 'onChange'
  });

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isPaymentButtonPress, setIsPaymentButtonPress] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(true);

  const onContinueButtonPress = useCallback((data: any) => {
    setIsOpenModal(true);
    Keyboard.dismiss()
  }, [])

  const onModalClose = useCallback(() => {
    setIsOpenModal(false);
    setIsPaymentButtonPress(false);
    Keyboard.dismiss()
  }, [])

  const onPaySubmit = () => {
    setIsOpenModal(false);
    setIsPaymentButtonPress(true);
  }


  const snapPointModal = ["60%"];
  const snapPointPayment = ["35"];

  const cardNumberValue = watch("cardNumber");

  return (
    <TouchableWithoutFeedback onPress={() => onModalClose()}>
      <View style={{flex: 1}}>
        <View style={
          [styles.root, {opacity: isOpenModal || isPaymentButtonPress ? 0.1 : 1, backgroundColor: isOpenModal || isPaymentButtonPress ? 'grey' : '#f7f6f2' }]
        }>
          <View style={styles.inputs}>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Card number</Text>
              <CustomInput
                name="cardNumber"
                placeholder='0000 0000 0000 0000'
                keyboardType='numeric'
                control={control}
                rules={{
                  required: 'Card number is required',
                  validate: (value: any) => value.length === 19 ? true : "Card number requires 16 digits"}}
                maxLength={19}
                formatter={cardNumberFormatter}
              />
            </View>

            <View style={styles.container}>
              <View style={[styles.input, {flex: 1}]}>
                <Text style={styles.inputTitle}>Expiry date</Text>
                <CustomInput
                  name="expiryDate"
                  placeholder='MM\YY'
                  keyboardType='numeric'
                  control={control}
                  rules={{required: 'Expiry date is required'}}
                  maxLength={5}
                  formatter={expirationDateFormatter}
                />
              </View>
              <View style={[styles.input, {flex: 1}]}>
                <Text style={styles.inputTitle}>Security code</Text>
                <CustomInput
                  name="securityCode"
                  placeholder='CVC\CVV'
                  keyboardType='numeric'
                  control={control}
                  rules={{required: 'Security code is required'}}
                  maxLength={3}
                />
              </View>
            </View>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Cardholder name</Text>
              <CustomInput
                name="cardholderName"
                placeholder='Enter cardholder full name'
                control={control}
                rules={{}}
              />
            </View>
          </View>
          <CustomButton title="Continue" onPress={handleSubmit(onContinueButtonPress)} />
        </View>

        {isOpenModal &&
          <BottomModal snapPoint={snapPointModal} onCloseModal={onModalClose}>
            <View style={{paddingHorizontal: 15, paddingTop: 20}}>
              <ConfirmTransferContent
                card={cardNumberValue}
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
    </TouchableWithoutFeedback>
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
  },
  input: {
    gap: 5
  },
  inputTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500'
  }
})

export default CardDetailsScreen;
