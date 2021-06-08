import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AgahiNavigator from "./AgahiNavigator"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import CategoryNavigator from "./CategoryNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="agahi"
                component={AgahiNavigator}
                options={{
                    tabBarLabel:"آگهی ها" ,
                    tabBarIcon: ({color , size}) => (
                        <MaterialIcons name="design-services" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Category" component={CategoryNavigator} options={{ tabBarLabel:"دسته بندی" ,tabBarIcon: ({color , size}) => (
                        <MaterialIcons name="engineering" size={size} color={color} />) }} />

           
            <Tab.Screen name="Account" component={AccountNavigator} options={{ tabBarLabel: "پروفایل" ,tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" size={size} color={color} />)}} />
        </Tab.Navigator>
    )
}
export default AppNavigator