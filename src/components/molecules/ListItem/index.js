import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconArrowIosForward, IconEditProfile, IconHelp, IconLanguage, IconRate } from "../../../assets";
import { colors, fonts } from "../../../utils";

export default function ListItem(props) {
  const Icon = () => {
    if (props.icon == 'edit-profile') {
      return <IconEditProfile style={styles.icon}/>;
    }
    if (props.icon == 'language') {
      return <IconLanguage style={styles.icon}/>;
    }
    if (props.icon == 'rate') {
      return <IconRate style={styles.icon}/>;
    }
    if (props.icon == 'help') {
      return <IconHelp style={styles.icon}/>;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.content}>
        {props.icon ? <Icon /> : <Image source={props.img} style={styles.avatar} />}
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.message}>{props.message}</Text>
        </View>
      </View>
      {props.type === "choose-menu" && <IconArrowIosForward />}
    </TouchableOpacity>
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
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  icon: { marginRight: 16 },
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
