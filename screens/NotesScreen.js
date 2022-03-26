import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "@firebase/app";
import "firebase/firestore";


const db = firebase.firestore().collection('appointments');



export default function NotesScreen({ navigation, route }) {
  const [notes, setNotes] = useState([]);

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Ionicons
            name="md-add-circle"
            size={30}
            color="black"
            style={{
              color: "#f55",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        
      ),
    });
  });

   // This is to set up the top right button
   useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={Profile}>
          <Ionicons
            name="md-person"
            size={30}
            color="black"
            style={{
              color: "#f55",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        
      ),
    });
  });

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
        const updatedNotes = collection.docs.map((doc) => {
  
          const noteObject = {
            ...doc.data(),
            id: doc.id,
          }
          console.log(noteObject)
          return noteObject
        })
        setNotes(updatedNotes)
      })
  
    return unsubscribe;
  }, [])

  // Monitor route.params for changes and add items to the database
  useEffect(() => {
    if (route.params?.text) {
      const newNote = {
        title: route.params.text,
        name: route.params.yourname,
        time: route.params.yourtime,
        doctor: route.params.yourdoctor,
        delete: false,
        id: notes.length.toString(),
        id2: notes.length.toString(),
      };

     db.add(newNote);
     // setNotes([...notes, newNote]);
    }
  }, [route.params?.text]);

  function addNote() {
    navigation.navigate("Add Screen");
  }

  
  function Profile() {
    navigation.navigate("Profile");
  }

  // This deletes an individual note
  function deleteNote(id) {
    console.log("Deleting " + id);
    // To delete that item, we filter out the item we don't want
    //setNotes(notes.filter((item) => item.id !== id));
     // Slides line 72 - 79
     db.doc(id).delete();
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 30,
          paddingBottom: 30,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.name}</Text>
        <Text>{item.title}</Text>
        <Text>{item.time}</Text>
        <Text>{item.doctor}</Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Ionicons name="trash" size={16} color="#944" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Details", {item: item})}>
          <Ionicons name="create" size={16} color="#944" />
          
        </TouchableOpacity>
        
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});