import {View, Text, StyleSheet} from 'react-native'
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity,} from 'react-native';


export const List = ({DATA}) => {

        const renderItem = ({item}) => {
          return (
            <TouchableOpacity style={[styles.item, { backgroundColor: '#E17F2E' }]}>
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

      </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
     
      item: {
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 5,
        borderRadius: 7,
      },
})