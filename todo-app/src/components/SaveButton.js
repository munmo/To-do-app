import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SaveButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}><MaterialCommunityIcons name="floppy" size={24} color="#E17F2E" />  Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {

            left: 10,
            backgroundColor: '#393E47',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
 
  },
});

export default SaveButton;
