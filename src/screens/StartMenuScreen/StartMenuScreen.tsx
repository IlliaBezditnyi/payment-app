import React, {FC} from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

const StartMenuScreen: FC = () => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <Pressable style={styles.buttonStyle} onPress={() => navigate('AddAmount')}>
        <Image style={styles.icon} source={require('../../../assets/images/money_modal_icon.png')} />
        <Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500'
        }}>
          Create Payment
        </Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigate('MerchantKeyChange')}>
        <Image style={styles.icon} source={require('../../../assets/images/key_icon.png')} />
        <Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500'
        }}>
          Merchant key settings
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 20
  },
  buttonStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#8e8e8e',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 20
  },
  icon: {
    width: 30,
    height: 30
  }
})

export default StartMenuScreen
