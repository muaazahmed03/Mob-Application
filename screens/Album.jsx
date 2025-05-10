import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './HomeStyles'

const Album = () => {
  const navigation = useNavigation();
  const BackwardNavigation = ()=>{
    navigation.navigate('About')
  }
  return (
    <View style={styles.container}>
          <Text style={styles.heading}>Welcome to Album Screen</Text>
          <TouchableOpacity style={styles.button} onPress={BackwardNavigation}>
            <Text style={styles.buttonText}>Go to About</Text>
          </TouchableOpacity>
        </View>
  )
}

export default Album;