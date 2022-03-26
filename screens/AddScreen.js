import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
} from "react-native";

export default function AddScreen({ navigation }) {
  const [text, setText] = useState("");
  const [yourname, setName] = useState("");
  const [yourtime, setTime] = useState("");
  const [yourdoctor, setDoctor] = useState("");
  //const [selectedValue, setSelectedValue] = useState("Docttor");


  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight:'bold' }}>Add Appointment</Text>
   
<TextInput
        placeholder="Patient's Name"
        style={styles.textInput}
        value={yourname}
        onChangeText={(input) => setName(input)}
      />   
      
      <TextInput
        placeholder="What is Patient's Appointment for?"
        style={styles.textInput}
        value={text}
        onChangeText={(input) => setText(input)}
      />

<TextInput
        placeholder="Date and Time"
        style={styles.textInput}
        value={yourtime}
        onChangeText={(input) => setTime(input)}
      />

<Text style={{ fontSize: 14,  marginTop: 10 }}>Assign to which Doctor?</Text>

<Picker
        selectedValue={yourdoctor}
        style={styles.pickerInput}
        onValueChange={(itemValue, itemIndex) => setDoctor(itemValue)}
      >
        <Picker.Item label="Dr. Lim" value="Dr. Lim" />
        <Picker.Item label="Dr. Tan" value="Dr. Tan" />
</Picker>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Notes", { text, yourname, yourtime, yourdoctor })}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{text.toUpperCase()}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    paddingTop: 40,
  },
  textInput: {
    borderColor: "#8b8b8b",
    borderWidth: 1,
    width: "80%",
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,

  },

  pickerInput: {
    borderColor: "#8b8b8b",
    borderWidth: 1,
    width: "80%",
    backgroundColor: 'white',
    height:"20%",
    borderRadius: 10,
    marginTop: 10,
  },

  button: {
    padding: 16,
    backgroundColor: "#39B2E5",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 160,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
