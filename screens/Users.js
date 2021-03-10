import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const users = [
  { id: 1, name: 'Leanne'},
  { id: 2, name: 'Ervin'},
]

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={x => x.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

