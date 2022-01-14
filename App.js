 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
   Image,
   TouchableOpacity,
   Linking,
   Alert,
   ActivityIndicator,
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home';
import QrCode from './src/qrcode';
import ProductScanRNCamera from './src/barcode';
import Generate from './src/generate';
const Stack = createNativeStackNavigator();

 export default function App () {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, }} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="BarCode" component={ProductScanRNCamera} />
        <Stack.Screen name="Generate" component={Generate} />
        {/* <Stack.Screen name="Result" component={Result} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#7475cf',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
   )
 }
