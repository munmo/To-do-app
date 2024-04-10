import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const DescriptionInput = ({ value, onChangeText }) => {
  return (
    <>
      <Text style={styles.btnText}>Description</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        multiline
        numberOfLines={4}
        activeUnderlineColor="orange"
        textColor="#222834"
      />
    </>
  );
};
const styles = StyleSheet.create({
    btnText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#222834',
    },
    textInput: {
      backgroundColor: '#768583',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomWidth: 0,
      paddingHorizontal: 10,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    
  });
  

export default DescriptionInput;