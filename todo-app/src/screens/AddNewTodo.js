import { View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import * as React from 'react';
import Input from "../components/Input";
import BackButton from "../components/BackButton";
import SaveButton from "../components/SaveButton";


export const AddNewTodo = ({ navigation }) => {

  
    return (
        <View style={styles.container}>
          
            <Input />
            <BackButton navigation={navigation} />
            <SaveButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
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