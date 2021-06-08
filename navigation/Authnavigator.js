import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";

import RegisterScreen from '../Screens/RegsiterScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle:"ورود",headerBackTitle:"بازگشت"}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitle:"عضویت",headerBackTitle:"بازگشت"}} />
    </Stack.Navigator>
  );
  
export default AuthNavigator
