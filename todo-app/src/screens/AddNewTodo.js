import {View, StyleSheet} from "react-native";
import * as React from 'react';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';

export default function AddNewTodo () {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Title</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text variant="headlineSmall">Description</Text>
      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
        numberOfLines={4}
      />
    </View>
    )
}

const styles = StyleSheet.create (
{
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
}
)