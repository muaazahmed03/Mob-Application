import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HelloScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1368954963/photo/cyber-security-in-two-step-verification-login-user-identification-information-security-and.jpg?s=612x612&w=0&k=20&c=rJIuhGrlNE9Qax8nLtKmRvn1h0M01z608vzYRfVK6E4=' }}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Join our community and discover amazing features</Text>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Login')} 
            style={styles.button}
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
          >
            Login
          </Button>
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('SignUp')} 
            style={[styles.button, styles.outlinedButton]}
            labelStyle={[styles.buttonText, styles.outlinedButtonText]}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 15,
    width: '100%',
    maxWidth: 300,
    borderRadius: 25,
    paddingVertical: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContent: {
    height: 50,
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },
  outlinedButtonText: {
    color: '#fff',
  },
});