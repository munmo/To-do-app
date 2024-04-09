import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import BackButton from '../components/BackButton';
import SaveButton from '../components/SaveButton';
import Input from '../components/Input'

export const AddNewTodo = ({ }) => {

  // Alert message
  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      return Alert.alert('Validation Error', 'Title and description cannot be empty.');
    } else Alert.alert('Todo Added Succesfully')

    const todo = {
      id: String(Date.now()),
      title,
      description,
    };

    navigation.navigate('Home', { newTodo: todo });
  };

  return (
        <View>
            <Input />
      <BackButton navigation={navigation}/>
        <SaveButton onPress={handleSave} />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  btnText:{
    fontSize: 20,
    fontWeight: "500",
    color: "#222834",

  }
});

export default AddNewTodo;
