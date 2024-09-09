import React, { useState } from "react";
import {StyleSheet, Pressable, Text, View } from "react-native";

export default function Counter() {
  const [isPressed1, setIsPressed1] = useState(false); //Estado del botón 1
  const [isPressed2, setIsPressed2] = useState(false); //Estado del botón 1
  const [isPressed3, setIsPressed3] = useState(false); //Estado del botón 1
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards</Text>
      <Pressable
        style={[
          styles.pressableContainer,
          isPressed1 && styles.pressableContainerTouched,
        ]}
        onPress={() => {
          setIsPressed1(!isPressed1);
        }}
      >
        <Text
          style={[
            styles.insideText,
            isPressed1 && styles.insideTextTouched,
          ]}
        >
          Card 1
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressableContainer,
          isPressed2 && styles.pressableContainerTouched,
        ]}
        onPress={() => {
          setIsPressed2(!isPressed2);
        }}
      >
        <Text
          style={[
            styles.insideText,
            isPressed2 && styles.insideTextTouched,
          ]}
        >
          Card 2
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressableContainer,
          isPressed3 && styles.pressableContainerTouched,
        ]}
        onPress={() => {
          setIsPressed3(!isPressed3);
        }}
      >
        <Text
          style={[
            styles.insideText,
            isPressed3 && styles.insideTextTouched,
          ]}
        >
          Card 3
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    position: "absolute",
    top: 180, 
    margin: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  pressableContainer: {
    //Estilo inicial
    margin: 10, //Para separar los botones
    padding: 15, //Para separar el texto del borde
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  pressableContainerTouched: { //Estilo cuando se toca
    backgroundColor: "white",
  },
  insideText: { //Color del texto inicial
    color: "white",
    fontSize: 16,
  },
  insideTextTouched: { // Color del texto cuando se toca
    color: "black",
  },
});

// export default MainPage;