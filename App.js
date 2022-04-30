import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "react-native-web";
import * as ImagePicker from "expo-image-picker";
//import image from "./assets/diamante.png";

const App = () => {
  // 1er arg -> variable que se va a modificar
  // 2o arg -> metodo que va a modificarla
  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    // pedir permisos para lanzar una lectura de imagenes de la galeria
    // como es async la funcion tiene que llevar delante la palabra clave await y definir como async el objeto que devuelve esta funcion
    permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    // devuelve la imagen que ha seleccionado el usuario de la galeria
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult);

    // si el usuario cancela la selección de la imagen entonces no da ningún error y continúa
    if (pickerResult.cancelled === true) {
      return;
    }

    // actualizamos el estado de selectedImage
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>

      <Image
        // mostramos por defecto una imagen random de internet o una que seleccione el usuario de su galería
        source={{
          uri:
            selectedImage !== null
              ? selectedImage.localUri
              : "https://picsum.photos/200/200",
        }}
        //source={image}
        style={styles.images}
      />

      <TouchableOpacity
        //onPress={() => Alert.alert('Hello!!')}
        onPress={openImagePickerAsync}
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
  title: { fontSize: 30, color: "#fff" },
  images: { height: 200, width: 200, borderRadius: 100, resizeMode: 'contain' },
  button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 30 },
  buttonText: { color: "white", fontSize: 20 },
});

export default App;
