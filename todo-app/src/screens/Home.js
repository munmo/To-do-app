import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { loadTodos, saveTodos } from '../datamodel/TodoModel';

const Home = ({ route, navigation }) => {
  const [todos, setTodos] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const loadInitialTodos = async () => {
      const initialTodos = await loadTodos();
      setTodos(initialTodos);
    };
    loadInitialTodos();
  }, []);

  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos(prevTodos => [...prevTodos, route.params.newTodo]);
    }
  }, [route.params?.newTodo]);

  const toggleExpand = id => {
    setExpandedId(id === expandedId ? null : id);
  };

  const handleDone = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

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
