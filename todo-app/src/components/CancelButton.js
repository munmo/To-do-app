import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

const CancelButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.cancelButtonContainer} onPress={onPress}>
      <Text style={styles.buttonText}><FontAwesome5 name="backspace" size={24} color="#E17F2E" />  Cancel</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({


  cancelButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});


export default CancelButton;
