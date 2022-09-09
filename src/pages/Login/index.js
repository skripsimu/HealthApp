import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

export default function Login() {
    return (
        <View style={styles.page}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginVertical: 40,
        maxWidth: 153,
    }
})