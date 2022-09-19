import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DummyDoctor2, IconArrowIosForward } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function ListDoctor(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={props.img} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.message}>{props.message}</Text>
        </View>
      </View>
      {props.type === "choose-doctor" && <IconArrowIosForward />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: { flex: 1, flexDirection: "row" },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  message: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
