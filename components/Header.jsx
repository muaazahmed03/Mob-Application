import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, delCounter } from '../Store/Slices/counterSlice';

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const increment_handler = () => {
    dispatch(addCounter());
  };

  const decrement_handler = () => {
    if (counter > 0) {
      dispatch(delCounter());
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Counter: {counter}
      </Text>

      <View style={{ flexDirection: 'row', gap: 15 }}>
        <TouchableOpacity
          onPress={increment_handler}
          style={{
            backgroundColor: '#4CAF50',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={decrement_handler}
          style={{
            backgroundColor: counter > 0 ? '#F44336' : '#ccc',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          disabled={counter === 0}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;