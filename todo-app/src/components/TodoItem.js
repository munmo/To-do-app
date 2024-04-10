// TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

const TodoItem = ({ item, isExpanded, toggleExpand, handleDone, handleDelete }) => {
  const handleDonePress = () => {
    handleDone(item.id); // Pass the item id to handleDone
  };

  const handleDeletePress = () => {
    handleDelete(item.id); // Pass the item id to handleDelete
  };

  return (
    <TouchableOpacity onPress={() => toggleExpand(item.id)}>
      <View style={styles.item}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>{item.title}</Text>
          <MaterialIcons name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#222834" />
        </View>
        {isExpanded && (
          <>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.controlPanel}>
              {!item.isDone && (
                <TouchableOpacity onPress={handleDonePress}>
                  <Ionicons name="cloud-done-sharp" size={24} color="green" />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={handleDeletePress}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 16,
    color: '#222834',
    fontWeight: 'bold',
  },
  description: {
    color: '#222834',
    marginBottom: 5,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default TodoItem;
