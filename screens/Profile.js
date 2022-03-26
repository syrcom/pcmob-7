import { NavigationContainer, useNavigation } from '@react-navigation/native'

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const Profile = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
    auth
    .signOut()
    .then (() => {
    navigation.navigate("Login")
    })
    .catch(error => alert(error.message))
    }

return (

    <KeyboardAvoidingView
    style={styles.container}
    >
<View style={styles.container}>
<Image style={styles.imageStyle} source={require('../images/team.jpg')}/>            


<Text style={styles.headerSmall}>Hi Nurse: {auth.currentUser?.email}</Text>
<TouchableOpacity
style={styles.button}
onPress={handleSignOut}
>
<Text style ={styles.buttonText}>Sign Out</Text>
</TouchableOpacity>
</View></KeyboardAvoidingView>

)

}

export default Profile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

        },
        imageStyle: {
            marginBottom: 30,

        },
        headerSmall: {
            color: 'black',
            fontSize: 24,
            marginBottom: 30,

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

    
    })