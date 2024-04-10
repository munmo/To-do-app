import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.btnText}>My Todo List</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
  }
});

export default Header;
