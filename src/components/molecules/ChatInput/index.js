import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Tulis pesan..." />
      <Gap width={14}/>
      <Button type="btn-icon-send" disable={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  textInput: {
    backgroundColor: colors.button.disable.background,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
  },
});