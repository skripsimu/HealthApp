import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DummyHospital2 } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital2} style={styles.img} />
      <View>
        <Text style={styles.title}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.subtitle}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  img: {
    width: 80,
    height: 60,
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    maxWidth: 152,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 6,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
