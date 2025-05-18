import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './HomeStyles'

const Home = () => {

  const obj = {
    name: "Muaaz Ahmed",
    email: "muaazahmed0111@gmail.com",
    city: 'Karachi',
    status: 'student',
  }

  const store_Data = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(obj));
      await AsyncStorage.setItem('status', 'Teacher');
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  const get_Data = async () => {
    try {
      const getData = await AsyncStorage.getItem('userData');
      const getData2 = await AsyncStorage.getItem('status');
      console.log('User Data:', JSON.parse(getData));
      console.log('Status:', getData2);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  const delete_Single_Data = async () => {
    try {
      await AsyncStorage.removeItem('status');
      console.log('Single item removed (status)');
    } catch (error) {
      console.error('Error removing single item:', error);
    }
  }

  const delete_All = async () => {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared');
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={store_Data}>
        <Text style={styles.buttonText}>Store Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={get_Data}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={delete_Single_Data}>
        <Text style={styles.buttonText}>Delete Status</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={delete_All}>
        <Text style={styles.buttonText}>Delete All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;
