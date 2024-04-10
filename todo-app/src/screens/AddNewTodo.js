import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import TitleInput from '../components/TitleInput';
import DescriptionInput from '../components/DescriptionInput';
import CancelButton from '../components/CancelButton';
import SaveButton from '../components/SaveButton';

export const AddNewTodo = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      return Alert.alert('Validation Error', 'Title and description cannot be empty.');
    } else Alert.alert('Todo added successfully');

    const todo = {
      id: String(Date.now()),
      title,
      description,
    };

    navigation.navigate('Home', { newTodo: todo });
  };

  return (
    <View style={styles.container}>
      <TitleInput value={title} onChangeText={setTitle} />
      <DescriptionInput value={description} onChangeText={setDescription} />
      <CancelButton onPress={() => navigation.goBack()} />
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
  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#222834',
  },
  textInput: {
    backgroundColor: '#768583',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default AddNewTodo;
