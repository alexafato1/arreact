import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

const  Hello = (props) =>{
    return (
        <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View> 
      
    )
}

export default Hello
