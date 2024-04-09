import {View, StyleSheet} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { useState } from 'react';


const Input = () => {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    return (
        <View style={styles.container}>
      <Text style={styles.btnText}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={text => setTitle(text)}
        activeUnderlineColor="orange"
        textColor="#222834"
      />
      <Text style={styles.btnText}>Description</Text>
      <TextInput
        style={styles.textInput}
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
        numberOfLines={4}
        activeUnderlineColor="orange"
        textColor="#222834"
      />
      </View>
            )}

const styles = StyleSheet.create({
      btnText:{
          fontSize: 20,
          fontWeight: "500",
          color: "#222834",
      
        },
      textInput:{
          backgroundColor: "#768583",
                  borderTopLeftRadius: 15, 
                  borderTopRightRadius: 15, 
                  borderBottomWidth: 0, 
                  paddingHorizontal: 10,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  
      }
})

export default Input;