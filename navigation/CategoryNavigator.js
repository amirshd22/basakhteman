import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../Screens/CategoryScreen'
import OstadKarScreen from '../Screens/OstadKarScreen'

const Stack = createStackNavigator();


const CategoryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown: false}} />
            <Stack.Screen name="Ostadkar" component={OstadKarScreen} options={{}} />
        </Stack.Navigator>
    )
}

export default CategoryNavigator