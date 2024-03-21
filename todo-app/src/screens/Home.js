import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Buy cat litter',
  },
  {
    id: '2',
    title: 'Buy milk',
  },
  {
    id: '3',
    title: 'Call student centre',
  },
];
const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    return (
      <View style={[styles.item, {backgroundColor: '#f9c2ff'}]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.btnText}>My Todo List</Text>
        <View style={styles.line}></View> 
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add New Todo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
    marginTop: 50,
    marginBottom: 20,
  },
  btnText:{
    fontSize: 25,
    fontWeight: "600",
    color: "black",
  },
  item: {
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 15,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
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
});

export default App;
