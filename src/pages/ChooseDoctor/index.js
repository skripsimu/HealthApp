import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, ListDoctor } from "../../components";
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from "../../assets";
import { colors } from "../../utils";

export default function ChooseDoctor({ navigation }) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="choose-doctor"
        img={DummyDoctor4}
        name="Alexander Jannie"
        message="Wanita"
      />
      <ListDoctor
        type="choose-doctor"
        img={DummyDoctor5}
        name="John McParker Steve"
        message="Pria"
      />
      <ListDoctor
        type="choose-doctor"
        img={DummyDoctor6}
        name="Nairobi Putri Hayza"
        message="Wanita"
      />
      <ListDoctor
        type="choose-doctor"
        img={DummyDoctor7}
        name="James Rivillia"
        message="Pria"
      />
      <ListDoctor
        type="choose-doctor"
        img={DummyDoctor8}
        name="Liu Yue Tian Park"
        message="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
