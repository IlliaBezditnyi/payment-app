import React, {FC, useState, useCallback, useRef} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import AmountInput from '../../components/AmountInput';
import SelectButton from '../../components/SelectButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';
import BottomModal from '../../components/BottomModal/BottomModal';

const AddAmountScreen: FC = () => {
  const [amountValue, setAmountValue] = useState<number>(0);
  const [commentValue, setCommentValue] = useState<string>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('cardPay')

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSelectButtonPress = useCallback(() => {
    setIsOpenModal(true);
  }, [])

  const onContinuePressed = () => {
    navigate('CardDetails');
  };

  const onModalClose = useCallback(() => {
    setIsOpenModal(false);
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

  return (
    <View style={{flex: 1}}>
      <View style={[styles.root, {opacity: isOpenModal ? 0.2 : 1, backgroundColor: isOpenModal ? 'grey' : '#f7f6f2' }]}>
        <View style={styles.inputs}>
          <AmountInput
            value={amountValue}
            onChange={setAmountValue}
            inputName='Amount'
          />
          <CustomInput
            value={commentValue}
            onChahge={setCommentValue}
            inputName='Transaction comment'
            placeholder='Transaction comment'
            multiline
            numberOfLines={5}
            maxLength={150}
          />
          <View style={{gap: 5}}>
            <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
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
        <CustomButton title="Continue" onPress={onContinuePressed} />
      </View>

      {isOpenModal &&
        <BottomModal snapPoint={snapPointsModal} onCloseModal={onModalClose}>
          <View style={{paddingHorizontal: 15, paddingTop: 20, gap: 10}}>
            <Text style={[styles.name, {width: '100%'}]}>
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
});

const icons = {
  card: require('../../../assets/images/credit_card_icon.png'),
  google: require('../../../assets/images/google_pay_icon.png'),
  chevron: require('../../../assets/images/chevron_right_icon.png'),
  unchecked: require('../../../assets/images/unchecked_icon.png'),
  checked: require('../../../assets/images/checked_icon.png')
}

export default AddAmountScreen;