import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../../utils";

export default function ListHospital(props) {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <View>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>{props.address}</Text>
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
