import { View, StyleSheet, TouchableOpacity} from "react-native";
import * as React from 'react';
import { Text} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Input from "../components/Input";
import BackButton from "../components/BackButton";

export const AddNewTodo = ({ navigation }) => {

  
    return (
        <View style={styles.container}>
            <Input />
            <BackButton />
      
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