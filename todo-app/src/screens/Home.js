import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { loadTodos, saveTodos } from '../datamodel/TodoModel';

const Home = ({ route, navigation }) => {
  const [todos, setTodos] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  // Load the todos when the component mounts
  useEffect(() => {
    const loadInitialTodos = async () => {
      const initialTodos = await loadTodos();
      setTodos(initialTodos);
    };
    loadInitialTodos();
  }, []);

  // Update the todos when a new todo is added through navigation
  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos(prevTodos => [...prevTodos, route.params.newTodo]);
    }
  }, [route.params?.newTodo]);

  // Expand Todo description 
  const toggleExpand = id => {
    setExpandedId(id === expandedId ? null : id);
  };

  // Done Todo list
  const handleDone = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  // Delete Todo List
  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <View style={{ flex: 1 , backgroundColor: 'white'}}>
      <StatusBar style="auto" />
      <Header />
      <TodoList
        todos={todos}
        expandedId={expandedId}
        toggleExpand={toggleExpand}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
      <AddTodo navigation={navigation} />
    </View>
  );
};

export default Home;
