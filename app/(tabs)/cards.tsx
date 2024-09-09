import { View, StyleSheet, Text, Pressable } from 'react-native';
import React, {useState} from 'react';
import { Link } from 'expo-router';


export default function Counter() {
    return (
      
      <View style={styles.container}>
      
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
      padding: 10, 
      backgroundColor: "black",
      color: "white",
    },
  });
  