import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddTodo = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add New Todo')}>
      <Text style={styles.buttonText}><Ionicons name="add-circle" size={24} color="#E17F2E" />  Add New Todo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
    bottom: 20,
    width: 350,
    left: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default AddTodo;
