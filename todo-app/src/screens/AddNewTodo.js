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
            <Text variant="headlineSmall">Title</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text variant="headlineSmall">Description</Text>
            <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                multiline
                numberOfLines={4}
            />

            <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                 <Text style={styles.buttonText}><FontAwesome5 name="backspace" size={24} color="green" />  Cancel</Text>
            </TouchableOpacity>
            
            </View>
      
            <View style={styles.saveButtonContainer}>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}><MaterialCommunityIcons name="floppy" size={24} color="green" />  Save</Text>
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
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      
    },
    saveButtonContainer:{
      position: 'absolute',
        bottom: 50,
        right: 50,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
      color: 'black',
      fontSize: 20,
      
    }
});

export default AddNewTodo;