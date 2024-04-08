import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ route, navigation }) => {
  const [todos, setTodos] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosJSON = await AsyncStorage.getItem('todos');
        console.log('Loaded todos from storage', todosJSON);
        if (todosJSON) {
          const todos = JSON.parse(todosJSON).map(todo => ({ ...todo, isExpanded: false }));
          setTodos(todos);
        }
      } catch (error) {
        console.error('Failed to load todos:', error);
      }
    };

    loadTodos();
  }, []);

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
        AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    //Delete Todo List
    const handleDelete = () => {
        const updatedTodos = todos.filter(todo => todo.id !== item.id);
        setTodos(updatedTodos);
        AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add New Todo')}>
        <Text style={styles.buttonText}><Ionicons name="add-circle" size={24} color="#E17F2E" />  Add New Todo</Text>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#393E47',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
    bottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default Home;
