import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const App = () => {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.btnText}>My Todo List</Text>
        <View style={styles.line}></View> 
      </View>
      
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
 
});

export default App;
