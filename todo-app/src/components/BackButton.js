import { View, StyleSheet, TouchableOpacity} from "react-native";
import * as React from 'react';
import { Text} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';


const BackButton = ({navigation}) => {

    return (
        <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                 <Text style={styles.buttonText}><FontAwesome5 name="backspace" size={24} color="#E17F2E"/>  Cancel</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create(
    {
        cancelButtonContainer: {
            position: 'absolute',
            bottom: 50,
            left: 50,
            backgroundColor: '#393E47',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          
        },
        buttonText:{
            color: 'white',
            fontSize: 20,
            
          },
    }
)

export default BackButton;