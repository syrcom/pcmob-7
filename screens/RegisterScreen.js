import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import { auth } from '../firebase'

const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
       // navigation.replace("Home")
    }

})
return unsubscribe
    }, [])


         

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
const user = userCredentials.user;
console.log(user.email);
        })
        .catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >

<Image style={styles.imageStyle} source={require('../images/register_img.jpg')}/>            


            <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
             value={email}
             onChangeText={text => setEmail(text)}
            style={styles.input}
            />
              <TextInput
            placeholder="Password"
             value={password}
             onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
            </View>

            <View style={styles.buttonContainer}>
            
            <TouchableOpacity
            onPress={handleSignUp}
            style={styles.button}
            >
            <Text style ={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

},
inputContainer: {
    width: '80%',

},
imageStyle: {
    marginBottom: 20,
},
input: {
    backgroundColor: 'white',
    borderColor: '#8b8b8b',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
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
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#8b8b8b',
    borderWidth: 2,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
color: 'blue',
fontWeight: '700',
fontSize: 16,}
})