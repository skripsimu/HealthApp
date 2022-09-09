import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import { ILGetStarted, ILLogo } from '../../assets'
import { colors, fonts } from '../../utils'

export default function GetStarted({ navigation }) {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('Register')}
                />
                <Gap height={16} />
                <Button
                    title="Sign In"
                    type="secondary"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 32,
        paddingRight: 60,
        color: colors.white,
        marginTop: 91
    }
})