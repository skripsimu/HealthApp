import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChatInput, ChatItem, Header } from "../../components";
import { colors, fonts } from "../../utils";

export default function ChatRoom({ navigation , route}) {
  const { doctor } = route.params;
  return (
    <View style={styles.page}>
      <Header
        title={doctor.name}
        subtitle={doctor.jobTitle}
        type="dark-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret 2022</Text>
        <ChatItem
          message="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
          isMine={true}
          date="4.20 AM"
        />
        <ChatItem
          message="Oh tentu saja tidak karena jeruk itu sangat sehat..."
          isMine={false}
          date="4.23 AM"
        />
        <ChatItem
          message="Baik ibu, terima kasih atas waktu dan ilmunya ..."
          isMine={true}
          date="4.28 AM"
        />
      </View>
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: "center",
  },
});
