import { View, StyleSheet, Button, TouchableOpacity} from "react-native";
import * as React from 'react';
import { Text, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const AddNewTodo = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    return (
        <View style={styles.container}>
            <Text style={styles.btnText}>Title</Text>
            <TextInput
  value={title}
  onChangeText={text => setTitle(text)}
  activeUnderlineColor="orange"
                textColor="#222834"
  style={{
    backgroundColor: "#768583",
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    borderBottomWidth: 0, 
    paddingHorizontal: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    }}
/>
            <Text style={styles.btnText}>Description</Text>
            <TextInput style={styles.textInput}
                value={description}
                onChangeText={text => setDescription(text)}
                multiline
                numberOfLines={4}
                activeUnderlineColor="orange"
                textColor="#222834"
            
            />

            <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                 <Text style={styles.buttonText}><FontAwesome5 name="backspace" size={24} color="#E17F2E"/>  Cancel</Text>
            </TouchableOpacity>
            
            </View>
      
            <View style={styles.saveButtonContainer}>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}><MaterialCommunityIcons name="floppy" size={24} color="#E17F2E"/>  Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        
    },
    cancelButtonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 50,
        backgroundColor: '#393E47',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      
    },
    saveButtonContainer:{
      position: 'absolute',
        bottom: 50,
        right: 50,
        backgroundColor: '#393E47',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
      color: 'white',
      fontSize: 20,
      
    },
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
});

export default AddNewTodo;