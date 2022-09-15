import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function TabItem({ title, active, onPress, onLongPress }) {
  const Icon = () => {
    if (title === "Doctor") {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    } else if (title === "Messages") {
      return active ? <IconMessagesActive /> : <IconMessages />;
    } else if (title === "Hospitals") {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.active : colors.text.inactive,
    fontWeight: fonts.primary[600],
    marginTop: 4,
  }),
});
