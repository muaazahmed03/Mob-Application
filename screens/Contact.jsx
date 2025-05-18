import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeStyles';
import {launchCamera} from 'react-native-image-picker';

const Contact = () => {
  const [capturedImage, setCapturedImage] = useState('');

  const navigation = useNavigation();
  const BackwardNavigation = () => {
    navigation.navigate('Home');
  };

  const open_camera_hander = async () => {
    const result = await launchCamera({
      includeBase64: true,
    });

    if (result) {
      const uri = result.assets[0].uri;
      setCapturedImage(uri);
    } else {
      console.log('error');
    }

    console.log(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Contact Screen</Text>
      <TouchableOpacity style={styles.button} onPress={BackwardNavigation}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={open_camera_hander}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <View>
        {capturedImage ? (
          <>
            <Image
              resizeMode="contain"
              width={400}
              height={400}
              source={{uri: capturedImage}}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCapturedImage('')}>
              <Text style={styles.buttonText}>Remove Picture</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default Contact;
