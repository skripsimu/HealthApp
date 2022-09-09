import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { colors } from '../../utils'

export default function Register({ navigation }) {
    return (
        <View style={styles.page}>
            <Input label="Full Name" />
            <Gap height={24} />
            <Input label="Pekerjaan" />
            <Gap height={24} />
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={40} />
            <Button
                title="Continue"
                onPress={
                    () => navigation.navigate('UploadPhoto')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        paddingTop: 10,
        flex: 1,
        backgroundColor: colors.white
    }
})