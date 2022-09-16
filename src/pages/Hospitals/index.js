import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DummyCover } from "../../assets";
import { colors, fonts } from "../../utils";
import { ListHospital } from "../../components";

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyCover} style={styles.background}>
        <Text style={styles.title}>Hospitals</Text>
        <Text style={styles.desc}>Hospitals</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.secondary },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: { height: 240, paddingTop: 50 },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: "center",
  },
});
