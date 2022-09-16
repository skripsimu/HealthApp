import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListDoctor } from "../../components/molecules";
import { colors, fonts } from "../../utils";

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: colors.secondary, flex: 1 },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 50,
    marginLeft: 16,
  }
});
