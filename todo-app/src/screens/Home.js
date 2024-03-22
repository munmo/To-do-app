import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {List} from "../components/List"
import AddTodo from "../components/AddTodo"

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
const Home = ({ navigation}) => {
  const [selectedId, setSelectedId] = useState();

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.btnText}>My Todo List</Text>
        <View style={styles.line}></View> 
      </View>
      <List DATA={DATA}/>
      <AddTodo navigation={navigation} />
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
  
  title: {
    fontSize: 15,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
  },
  
});

export default Home;