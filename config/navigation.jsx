import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Stack = createNativeStackNavigator();

const NavigationRaect = () => {
  return (
    <Stack.Navigator initialRouteName='Contact'> 
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Contact' component={Contact} />

    </Stack.Navigator>
  )
}

export default NavigationRaect;