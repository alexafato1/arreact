import React,{useState} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
  } from 'react-native';

function Blink() {
    const [counter, setCounter] = useState(0)

    return (
        
        <>
       
        <Text>{counter}</Text>
        <Button onPress={() => setCounter(counter + 1 ) } title="Increment" />
        <Button onPress={() => setCounter( counter - 1 ) } title="Decrement" />
        </>
   )
}

export default Blink
