import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';
import { DummyDoctor8 } from '../../../assets';

export default function DarkProfile({ onPress, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={DummyDoctor8} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingBottom: 30,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 16,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  content: { flex: 1 },
  img: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: "center",
  },
});