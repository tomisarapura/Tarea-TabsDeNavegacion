import { View, StyleSheet, Text, Pressable } from 'react-native';
import React, {useState} from 'react';
import { Link } from 'expo-router';

export default function Counter() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count != 0) setCount(count - 1);
  };
  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
        
      <Text style= {{margin:5}}>
        Cantidad = {count}
      </Text>
    
      <Pressable
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            margin: 5,
          }}
          onPress={sumar}
        >
          <Text style={{ color: "white" }}>Sumar</Text>
      </Pressable>

      <Pressable
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 5,
            margin: 5,
          }}
          onPress={restar}
        >
          <Text style={{ color: "white" }}>Restar</Text>
      </Pressable>

      <Link href="/" asChild>
        <Pressable style={{borderRadius: 5}}>
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
    padding: 10, 
    backgroundColor: "black",
    color: "white",
  },
});
