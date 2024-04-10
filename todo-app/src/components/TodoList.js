import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, expandedId, toggleExpand, handleDone, handleDelete }) => {
  const renderItem = ({ item }) => (
    <TodoItem
      item={item}
      isExpanded={item.id === expandedId}
      toggleExpand={toggleExpand}
      handleDone={handleDone}
      handleDelete={handleDelete}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={expandedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default TodoList;
