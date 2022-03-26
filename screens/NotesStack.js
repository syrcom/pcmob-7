import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from "./NotesScreen";

const InnerStack = createNativeStackNavigator();
export default function NotesStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          title: "All Appointments",
          headerStyle: {
            backgroundColor: "#ffffff", 
            
          },
          headerTintColor: "#39B2E5",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",

          },
        }
    
    
    }
      />

      
    </InnerStack.Navigator>
    
  );
}
