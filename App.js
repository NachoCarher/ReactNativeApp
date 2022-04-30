import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Button } from "react-native-web";
//import image from "./assets/diamante.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>

      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        //source={image}
        style={styles.images}
      />

      <TouchableOpacity
        onPress={() => Alert.alert('Hello!!')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

// agrupa estilos, como si fuera un archivo css
// lo metemos en una constante y asi podemos llamar a sus atributos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: '#fff' },
  images: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: 'deepskyblue', padding: 7, marginTop: 30 },
  buttonText: { color: "white", fontSize: 20 }
});

export default App;
