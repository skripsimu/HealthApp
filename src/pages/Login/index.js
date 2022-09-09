import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors } from '../../utils'

export default function Login() {
    return (
        <SafeAreaView style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24}/>
            <Input label="Password" />
            <Gap height={10}/>
            <Link title="Forgot My password" size={14}/>
            <Gap height={40}/>
            <Button title="Sign In" type="" />
            <Gap height={30}/>
            <Link title="Create New Account" size={12}  align="center"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        marginVertical: 40,
        maxWidth: 153,
    }
})