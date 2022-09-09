import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({ type, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (type) => (
        {
            backgroundColor: type === 'secondary' ? '#fff' : '#0BCAD4',
            paddingVertical: 10,
            borderRadius: 10
        }
    ),
    text: (type) => ({
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: type === 'secondary' ? 'black' : 'white'
    })
})