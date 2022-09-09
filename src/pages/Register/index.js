import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button, Input, Link } from '../../components'

export default function Register() {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text>Register</Text>
            <Input />
            <Input />
            <Link />
            <Button title="Sign In" />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40
    }
})