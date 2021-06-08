import React from 'react'
import {Button, styleSheet} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import AddAgahiScreen from '../Screens/AddAgahiScreen';
import AgahiScreen from "../Screens/AgahiScreen";
const Stack = createStackNavigator();

function AgahiNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="agahi"
        component={AgahiScreen}
        options={{
            headerTitle: "آگهی ها",
            headerRight: () => (
                <Button
                onPress={() => navigation.navigate("AddAgahi")}
                title="ثبت آگهی"
            />
          ),
            
        }}
      />

      <Stack.Screen   name="AddAgahi" component={AddAgahiScreen} options={{ headerTitle:"ثبت آگهی",headerBackTitle:"بازگشت"}} />
    </Stack.Navigator>
  );
}


export default AgahiNavigator