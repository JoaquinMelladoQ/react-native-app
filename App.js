import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text>APP!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>APP!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>APP!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
