import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import firebase from './src/utils/firebase'; //mi configuracion lista que indica al proyecto de google
import 'firebase/firestore';              //un modulo de firebase dentro de npm




firebase.firestore().settings({experimentalForceLongPolling:true})
const db = firebase.firestore(firebase);


db.collection('micolleccion')
  .add({
    name: 'nameeeeee ',
    age: 302221,
  })
  .then(() => {
    console.log('User added!');
  });


export default function App() {
  return (
    <View>


      <Text>aca</Text>


    </View>
  )
}

const styles = StyleSheet.create({})
