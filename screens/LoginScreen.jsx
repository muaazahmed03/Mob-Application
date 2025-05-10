import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('https://final-attempt-nine.vercel.app/muaaz/api/login', {
        email,
        password,
      });

      console.log('Login Success:', response.data);
      Alert.alert('Success', 'Login Successful');

      navigation.navigate('Welcome');
      
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      Alert.alert('Login Failed', error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
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
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
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
    fontSize: 28,
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
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
