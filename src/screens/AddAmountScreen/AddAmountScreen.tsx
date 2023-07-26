import React, {FC, useState, useCallback} from 'react';
import {View, StyleSheet, Text, Pressable, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import AmountInput from '../../components/AmountInput';
import SelectButton from '../../components/SelectButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';
import BottomModal from '../../components/BottomModal/BottomModal';
import {useForm} from 'react-hook-form';

const AddAmountScreen: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('cardPay');

  const {control, handleSubmit, formState, watch} = useForm({
    defaultValues: {
      amount: '00.00'
    },
    mode: 'onChange'
  });

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSelectButtonPress = useCallback(() => {
    setIsOpenModal(true);
    Keyboard.dismiss()
  }, [])

  const onContinuePressed = () => {
    navigate('CardDetails');
  };

  const onModalClose = useCallback(() => {
    setIsOpenModal(false);
    Keyboard.dismiss()
  }, [])

  const cardPaymentSelected = () => {
    setSelected('cardPay')
    setIsOpenModal(false)
  }

  const googlePaymentSelected = () => {
    setSelected('googlePay')
    setIsOpenModal(false)
  }

  const snapPointsModal = ["35%"];

  const amountValue = watch("amount");

  return (
    <TouchableWithoutFeedback onPress={() => onModalClose()}>
      <View style={{flex: 1}}>
        <View style={[styles.root, {opacity: isOpenModal ? 0.1 : 1, backgroundColor: isOpenModal ? 'grey' : '#f7f6f2' }]}>
          <View style={styles.inputs}>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Amount</Text>
              <AmountInput
                name="amount"
                control={control}
                rules={{pattern: {value: "00.00", message: 'Amount is required'}}}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Cardholder name</Text>
              <CustomInput
                name="comment"
                placeholder='Transaction comment'
                control={control}
                rules={{}}
                maxLength={120}
                multiline={true}
                numberOfLines={5}
              />
            </View>

            <View style={{gap: 5}}>
              <Text style={styles.inputTitle}>
                Selected method
              </Text>
              {selected === 'cardPay' ?
                (
                  <SelectButton
                    buttonName='Selected method'
                    title='Credit or Debit card'
                    subtitle='Top up instantly'
                    onPress={onSelectButtonPress}
                    mainIcon={icons.card}
                    checkIcon={icons.chevron} />
                ):
                (
                  <SelectButton
                    buttonName='Selected method'
                    title='Google pay'
                    subtitle='Top up instantly'
                    onPress={onSelectButtonPress}
                    mainIcon={icons.google}
                    checkIcon={icons.chevron} />
                )
              }
            </View>
          </View>
          <CustomButton title="Continue" onPress={handleSubmit(onContinuePressed)} />
        </View>

        {isOpenModal &&
          <BottomModal snapPoint={snapPointsModal} onCloseModal={onModalClose}>
            <View style={{paddingHorizontal: 15, paddingTop: 20, gap: 10}}>
              <Text style={[styles.selectModalTitle, {width: '100%'}]}>
                Selected method
              </Text>
              <View style={{borderWidth: 1, borderRadius: 8, borderColor: '#8e8e8e'}}>
                <SelectButton
                  title='Credit or Debit card'
                  subtitle='Top up instantly'
                  onPress={cardPaymentSelected}
                  mainIcon={icons.card}
                  checkIcon={selected === 'cardPay' ? icons.checked : icons.unchecked}
                />
              </View>
              <View style={{borderWidth: 1, borderRadius: 8, borderColor: '#8e8e8e'}}>
                <SelectButton
                  title='Google pay'
                  subtitle='Top up instantly'
                  onPress={googlePaymentSelected}
                  mainIcon={icons.google}
                  checkIcon={selected === 'googlePay' ? icons.checked : icons.unchecked}
                />
              </View>
            </View>
          </BottomModal>
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  inputs: {
    flex: 1,
    gap: 20
  },
  input: {
    gap: 5
  },
  inputTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500'
  },
  selectModalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  }
});

const icons = {
  card: require('../../../assets/images/credit_card_icon.png'),
  google: require('../../../assets/images/google_pay_icon.png'),
  chevron: require('../../../assets/images/chevron_right_icon.png'),
  unchecked: require('../../../assets/images/unchecked_icon.png'),
  checked: require('../../../assets/images/checked_icon.png')
}

export default AddAmountScreen;
