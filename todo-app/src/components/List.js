import {View, Text, StyleSheet} from 'react-native'
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity,} from 'react-native';

export const List = ({DATA}) => {

        const renderItem = ({item}) => {
          return (
            <TouchableOpacity style={[styles.item, { backgroundColor: '#f9c2ff' }]}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          );
        };
        
    return(
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
         
        />
        <TouchableOpacity
          style={styles.button}
          onPress ={() => {}}
        >
          <Text style={styles.buttonText}>Add New Todo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
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
      item: {
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 5,
        borderRadius: 7,
      },
})