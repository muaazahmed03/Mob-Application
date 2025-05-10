import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeStyles';
import MyCard from './MyCard';
import {TextInput} from 'react-native-paper';

const About = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const submitButton = ()=>{
    console.log(email,password,code);
  }

  // const navigation = useNavigation();
  // const forwardNavigation = ()=>{
  //   navigation.navigate('Album')
  // }
  return (
    <View>
      {/* <Text style={styles.heading}>Welcome to About Screen</Text>
      <TouchableOpacity style={styles.button} onPress={forwardNavigation}>
        <Text style={styles.buttonText}>Go to Album</Text>
      </TouchableOpacity> */}
      <View style={{margin: 35}}>
        <TextInput
        style={{backgroundColor: "black"}}
        keyboardType='email-address'
          onChangeText={e => {
            setEmail(e);
          }}
          placeholder="enter email"
        />
        <TextInput
        onChangeText={e => {
          setPassword(e);
        }}
          style={{marginTop: 10, backgroundColor: "black"}}
          placeholder="enter password"
          secureTextEntry={true}
        />
        <TextInput
        onChangeText={e => {
          setCode(e);
        }}
          style={{marginTop: 10, backgroundColor: "black"}}
          placeholder="enter code"
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={submitButton}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>

      <MyCard />

    </View>
  );
};

export default About;
