import React, {FC} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddAmountScreen from '../screens/AddAmountScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import MerchantKeyChange from '../screens/MerchantKeyChange';
import StartMenuScreen from '../screens/StartMenuScreen';
import AuthCodeScreen from "../screens/AuthCodeScreen";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#f7f6f2'},
        headerShadowVisible: false
      }}>
        <Stack.Screen
          name="StartMenu"
          component={StartMenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthCode"
          component={AuthCodeScreen}
          options={{title: 'Auth Code', headerTitleStyle: {fontSize: 16, fontWeight: "500"}}}
      />
        <Stack.Screen
          name="AddAmount"
          component={AddAmountScreen}
          options={{title: 'Add Amount', headerTitleStyle: {fontSize: 16, fontWeight: "500"}}}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetailsScreen}
          options={{title: 'Card Details', headerTitleStyle: {fontSize: 16, fontWeight: "500"}}}
        />
        <Stack.Screen
          name="MerchantKeyChange"
          component={MerchantKeyChange}
          options={{title: 'Merchant key change', headerTitleStyle: {fontSize: 16, fontWeight: "500"}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
