import React, { useState, useEffect, useRef } from 'react';

import {
   View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <ImageBackground source={{uri : 'https://i.stack.imgur.com/1NJkV.jpg'}} resizeMode="contain" style={styles.image}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{flex: 0.45}} onPress={() => navigation.navigate('BarCode')}>
                    <Text style={styles.text}>BarCode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 0.4}}  onPress={() => navigation.navigate('QrCode')}>
                    <Text style={styles.text}>QrCode</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginTop: 20}}>
                <TouchableOpacity style={{flex: 0.45}} onPress={() => navigation.navigate('Generate')}>
                <Text style={styles.textGen}>Gen your QrCode</Text>
                </TouchableOpacity>
               
            </View>
        </ImageBackground>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    textGen: {
        color: "white",
        fontSize: 40,
        lineHeight: 80,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
  });

export default Home;