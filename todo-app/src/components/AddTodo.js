import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const AddTodo = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Add New Todo');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Add New Todo</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddTodo;
