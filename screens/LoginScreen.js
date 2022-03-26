import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import { auth } from '../firebase'





const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
        navigation.navigate("Notes Stack")
    }

})

    }, [])


         

//    const handleSignUp = () => {
//        auth
//        .createUserWithEmailAndPassword(email, password)
//        .then(userCredentials => {
//const user = userCredentials.user;
//console.log(user.email);
//        })
//        .catch(error => alert(error.message))
//    }

const handleLogin = () => {
auth
.signInWithEmailAndPassword(email, password)
.then(userCredentials => {
    const user = userCredentials.user;
    console.log('Logged in', user.email);
})
.catch(error => alert(error.message))

    }

    return ( 
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <Text style={styles.headerSmall}>Welcome to</Text>
            <Text style={styles.headerBig}>DoctorAppt</Text>
            <Image source={require('../images/welcome_img.jpg')}/>            

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
            onPress={handleLogin}
            style={styles.button}
            >
            <Text style ={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.buttonOutline]}
            >
<Text>Do not have an account? </Text>
            <Text style ={styles.buttonOutlineText}>Register now</Text>
            </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    )


    
        
          
      

}

export default LoginScreen

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
    marginTop: 50,
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
fontWeight: '700',
fontSize: 16,},

headerSmall: {
    color: 'black',
    fontSize: 24,
},

headerBig: {
    color: '#39B2E5',
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 40,

},

})