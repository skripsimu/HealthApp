import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILCatUmum } from "../../../assets";
import { colors, fonts } from "../../../utils";
import { Gap } from "../../atoms";

export default function DoctorCategories() {
  return (
    <View style={styles.container}>
      <ILCatUmum />
      <Gap height={28} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[200],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
