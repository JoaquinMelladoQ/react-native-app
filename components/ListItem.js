import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
  }
})

export default ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  ) 
}
