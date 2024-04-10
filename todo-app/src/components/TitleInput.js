import React from 'react';
import { Text, TextInput, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TitleInput = ({ value, onChangeText }) => {
  return (
    <>
      <Text style={styles.btnText}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
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
  
export default TitleInput;