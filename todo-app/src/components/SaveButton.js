import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SaveButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.saveButtonContainer} onPress={onPress}>
      <Text style={styles.buttonText}><MaterialCommunityIcons name="floppy" size={24} color="#E17F2E" />  Save</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  saveButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default SaveButton;