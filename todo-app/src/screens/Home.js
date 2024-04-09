import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AddTodo from '../components/AddTodo';
import { loadTodos, saveTodos } from '../datamodel/TodoModel';

const Home = ({ route, navigation }) => {
  const [todos, setTodos] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  // Load the todos when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      const todos = await loadTodos();
      setTodos(todos);
    };
  }, []);

  // Update the todos when a new todo is added through navigation
  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos(prevTodos => [...prevTodos, route.params.newTodo]);
    }
  }, [route.params?.newTodo]);

  const toggleExpand = id => {
    setExpandedId(id === expandedId ? null : id);
  };

  const renderItem = ({ item }) => {
    const isExpanded = item.id === expandedId;

    //Done Todo List
    const handleDone = () => {
      const updatedTodos = todos.map(todo =>
        todo.id === item.id ? { ...todo, isDone: true } : todo
      );
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
    };

    //Delete Todo List
    const handleDelete = () => {
      const updatedTodos = todos.filter(todo => todo.id !== item.id);
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
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
                                <TouchableOpacity onPress={handleDone}>
                                    <Ionicons name="cloud-done-sharp" size={24} color="green" />
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity onPress={handleDelete}>
                                <FontAwesome name="trash" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </TouchableOpacity>
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
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={expandedId}

        />
      </SafeAreaView>
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
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#222834",
  },
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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
  }
});

export default Home;
