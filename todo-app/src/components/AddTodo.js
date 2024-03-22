import {View, Text, StyleSheet} from 'react-native';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity,} from 'react-native';

export default function AddTodo (){
    return (
        <TouchableOpacity
          style={styles.button}
          onPress ={() => {}}
        >
          <Text style={styles.buttonText}>Add New Todo</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 16,
      },
      button: {
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 10,
      },
})