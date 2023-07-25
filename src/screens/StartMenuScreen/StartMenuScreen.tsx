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
        <Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500'
        }}>
          Create Payment
        </Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigate('MerchantKeyChange')}>
        <Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500'
        }}>
          Change merchant key
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
    borderWidth: 1,
    borderColor: '#8e8e8e',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 20
  }
})

export default StartMenuScreen
