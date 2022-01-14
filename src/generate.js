import React, {useState, useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

const Generate = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <QRCode
          value={qrvalue ? qrvalue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
        <Text style={styles.textStyle}>
          Please insert value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="Enter Any Value here"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={styles.buttonTextStyle}>
            Generate QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    padding: 15,
    marginHorizontal: 30,
    width: '80%'
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Generate;