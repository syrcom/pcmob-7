import React from 'react';
import { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { firebase } from "@firebase/app";
import "firebase/firestore";


const ApptDetails = ({route, navigation}) => {
const [id, setID] = useState('');
const [name, setName] = useState('');
const [title, setTitle] = useState('');
const [time, setTime] = useState('');
const [doctor, setDoctor] = useState('');
//const [loading, setLoading] = useState(false);

const db = firebase.firestore().collection('appointments');


const save = async (val) => {
console.log('val', val)    
db
.doc(val.id).set({
name: val.name,
title: val.title,
time: val.time,
doctor: val.doctor,
});
};

useEffect(() => {
console.log('details', route.params.item);
setName('');
setTitle('');
setTime('');
setDoctor('');

if(route.params.item){
setID(route.params.item.id);
setName(route.params.item.name);
setTitle(route.params.item.title);
setTime(route.params.item.time);
setDoctor(route.params.item.doctor);
}

}, [route]);

const handleSave = () => {
if(name && title && time && doctor) {
let content = {};
content.id = id;
content.name = name;
content.title = title;
content.time = time;
content.doctor = doctor;
save(content);
navigation.goBack();
}

}

return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
            <View style={styles.inputContainer}>
<TextInput style={styles.input}
placeholder='Name'
keyboardType='default'
returnKeyType='go'  onChangeText={(t) => setName(t)}
value={name}
/>
<TextInput style={styles.input}
placeholder='Appointment for?'
keyboardType='default'
returnKeyType='go'  onChangeText={(t) => setTitle(t)}
value={title}
/>
<TextInput style={styles.input}
placeholder='Date and Time'
keyboardType='default'
returnKeyType='go'  onChangeText={(t) => setTime(t)}
value={time}
/>
<TextInput style={styles.input}
placeholder='Which Doctor?'
keyboardType='default'
returnKeyType='go'  onChangeText={(t) => setDoctor(t)}
value={doctor}
/>

</View>
<View style={styles.buttonContainer}>
<TouchableOpacity
style={styles.button}
onPress={handleSave}>
<Text style ={styles.buttonText}>Save</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>

);
};

export default ApptDetails;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#39B2E5',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        marginTop: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#8b8b8b',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 16,
        borderRadius: 10,
        marginTop: 10,
    }})