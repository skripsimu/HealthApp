import React from "react";
import { StyleSheet, View } from "react-native";
import { ILNoAvatar } from "../../assets";
import { Button, Gap, Header, Link, UserProfileHeader } from "../../components";
import { colors } from "../../utils";

export default function UploadPhoto({ navigation }) {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Foto" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <UserProfileHeader
            img={ILNoAvatar}
            title="Harakiri Kanan"
            subtitle="Dokter Bedah"
            iconType="add"
          />
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  profile: {
    justifyContent: "center",
    flex: 1,
  },
});
