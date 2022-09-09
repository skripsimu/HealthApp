import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GetStarted, Login, Register, Splash, UploadPhoto } from '../pages';
import { fonts } from '../utils';


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
                options={{
                    headerTitle: "Daftar Akun",
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: fonts.primary[600]
                    }
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto}
                options={{
                    headerTitle: "Upload Photo",
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: fonts.primary[600]
                    }
                }}
            />
        </Stack.Navigator>
    )
}