import { View, StyleSheet, TouchableOpacity} from "react-native";
import * as React from 'react';
import { Text} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SaveButton = () => {
    return (
        <View style={styles.saveButtonContainer}>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}><MaterialCommunityIcons name="floppy" size={24} color="#E17F2E"/>  Save</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create(
    {
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
    }
)

export default SaveButton;