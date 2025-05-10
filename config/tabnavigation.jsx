import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {NavigationContainer} from '@react-navigation/native';
import About from '../screens/About';
import Album from '../screens/Album';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
        tabBarInactiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'green'
      }}> 

        <Tab.Screen options={{
          tabBarIcon:({color})=>{
            return <AntDesign name='home' size={20} color={color}/>;
          }
        }} name="Home" component={Home} />

        <Tab.Screen options={{
          tabBarIcon:({color})=>{
            return <AntDesign name='contacts' size={20} color={color} />;
          }
        }}  name="Contact" component={Contact} />

        <Tab.Screen options={{
          tabBarIcon:({color})=>{
            return <AntDesign name='questioncircleo' size={20} color={color} />;
          }
        }}  name="About" component={About} />

        <Tab.Screen options={{
          tabBarIcon:({color})=>{
            return <AntDesign name='book' size={20} color={color} />;
          }
        }}  name="Album" component={Album} />
      </Tab.Navigator>
  );
};

export default TabNavigation;
