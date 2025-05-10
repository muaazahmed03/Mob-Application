import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationRaect from './config/navigation'
import Tabnavigation from './config/tabnavigation'
import TabNavigation from './config/tabnavigation'
import { PaperProvider } from 'react-native-paper'
import HelloScreen from './screens/HelloScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <TabNavigation />
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App