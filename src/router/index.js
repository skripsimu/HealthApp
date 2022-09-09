import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GetStarted, Login, Register, Splash } from '../pages';


const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}