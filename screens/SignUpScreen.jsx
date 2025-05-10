import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');

  const handleSubmit = async () => {
    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await axios.post(
        'https://final-attempt-nine.vercel.app/muaaz/api/signup',
        userData
      );

      console.log('Signup Successful:', response.data);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');

    } catch (error) {
      console.error('Signup Failed:', error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.shutterstock.com/image-photo/cyber-security-data-protection-on-600nw-2492108755.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        mode="outlined"
        style={styles.input}
        textColor="black"

      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        mode="outlined"
        style={styles.input}
        textColor="black"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        textColor="black"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        textColor="blue"
      />
      
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Sign Up
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320648',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: 'center',
    resizeMode: 'container',
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    marginVertical: 10,
  },
  switchText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
  },
});
