import AsyncStorage from '@react-native-async-storage/async-storage';

// Load Data
export const loadTodos = async () => {
  try {
    const todosJSON = await AsyncStorage.getItem('todos');
    console.log('Loaded todos from storage', todosJSON);
    if (todosJSON) {
      return JSON.parse(todosJSON).map(todo => ({ ...todo, isExpanded: false }));
    }
    return [];
  } catch (error) {
    console.error('Failed to load todos:', error);
    return [];
  }
};

// Save Data
export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos saved successfully');
  } catch (error) {
    console.error('Failed to save todos:', error);
  }
};
