import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddScreen from "./screens/AddScreen";
import NotesStack from "./screens/NotesStack";
import ApptDetails from "./screens/ApptDetails";

import Profile from "./screens/Profile";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
<Stack.Navigator>
<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
<Stack.Screen options={{ headerShown: true }} name="Register" component={RegisterScreen} />
<Stack.Screen options={{ headerShown: false }} name="Notes Stack" component={NotesStack} />
<Stack.Screen options={{ headerShown: true }} name="Details" component={ApptDetails} />
<Stack.Screen name="Add Screen" component={AddScreen} />
<Stack.Screen name="Profile" component={Profile} />


</Stack.Navigator>
  </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
