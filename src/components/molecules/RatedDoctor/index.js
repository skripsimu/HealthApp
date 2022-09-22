import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DummyDoctor1, IconStar } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function RatedDoctor({name, desc, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  profile: { flex: 1 },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    marginTop: 2,
    color: colors.text.secondary,
  },
  rating: { flexDirection: "row" },
});
