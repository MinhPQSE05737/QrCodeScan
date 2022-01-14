import React, { useState, useEffect, useRef } from 'react';

import {
   View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking, 
  ImageBackground
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrCode = () => {
 const scanner = useRef(null);
 const [scan, setScan] = useState(false);
 const [result, setResult] = useState(null);
 const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

 useEffect(() => {
     setResult(null);
 }, []);
 
 const [camera, setCamera] = useState('back');

 const onSuccess = e => {
   setResult(e);
   setScan(false);
   Linking.openURL(e.data).catch(err =>
     alert('Cannot open!')
   );
 };

 const switchCamera = () => {
     if(camera === 'back') {
       setCamera('front');
       return camera;
     }
     else {
       setCamera('back');
       return camera;
     }
 }

 const switchFlash = () => {
   console.log({flash});
   if(flash == RNCamera.Constants.FlashMode.off) {
     setFlash(RNCamera.Constants.FlashMode.on);
     return flash;
   }
   else {
     setFlash(RNCamera.Constants.FlashMode.off);
     return flash;
   }
 }
 return  !scan ? (
         <ImageBackground source={{uri : 'https://i.stack.imgur.com/1NJkV.jpg'}} resizeMode="contain" style={styles.image}>
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(true)}>
                <Text style={styles.buttonTextScan}>Start Scan</Text>
                </TouchableOpacity>
         </ImageBackground>
   ) 
   : (
   <QRCodeScanner
       onRead={(e) => onSuccess(e)}
       ref={scanner}
       // flashMode={}
       cameraType={camera}
       reactivate={true}
       showMarker={true}
       topContent={
               <TouchableOpacity style={styles.buttonTouchable}  onPress={switchCamera}>
                 <Text style={styles.buttonText}>Switch camera</Text>
               </TouchableOpacity>
       }
       bottomContent={
         <>
         <TouchableOpacity style={styles.buttonTouchable}  onPress={() => setScan(false)}>
             <Text style={styles.buttonText}>Stop</Text>
         </TouchableOpacity></>
       }
     />
 );
};

const styles = StyleSheet.create({
 centerText: {
   flex: 1,
   fontSize: 18,
   padding: 32,
   color: '#777'
 },
 container: {
   flex: 1,
   backgroundColor: 'white',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column'
 },
 image: {
    flex: 1,
    justifyContent: "center",
  },
 textBold: {
   fontWeight: '500',
   color: '#000'
 },
 buttonText: {
   fontSize: 21,
   color: 'white'
 },
 buttonTextScan: {
    color: "white",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
 },
 buttonTouchable: {
   padding: 5,
   backgroundColor: "#000000c0",
   alignSelf: 'center'
 }
});

export default QrCode;
