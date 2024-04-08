import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const List = ({ DATA }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleItemDisplay = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(item => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedIds.includes(item.id);
    return (
      <TouchableOpacity onPress={() => toggleItemDisplay(item.id)}>
        <View style={styles.item}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.title}>{item.title}</Text>
            <MaterialIcons name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#222834" />
          </View>
          {isExpanded && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.controlPanel}>
                <TouchableOpacity onPress={() => console.log('Done pressed')}>
                <Ionicons name="cloud-done-sharp" size={24} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Delete pressed')}>
                <FontAwesome name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={expandedIds}
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
  descriptionContainer: {
    backgroundColor: '#E17F2E',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  description: {
    color: '#fff',
    marginBottom: 5,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default List;
