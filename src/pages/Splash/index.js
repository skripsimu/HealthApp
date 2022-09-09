import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors } from '../../utils';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000);
    }, [navigation]);
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Health App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1, alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.secondary,
        marginTop: 20
    }
})