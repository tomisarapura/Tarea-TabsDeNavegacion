import { View, StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Counter() {
  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Link href="/" asChild>
        <Pressable >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});
