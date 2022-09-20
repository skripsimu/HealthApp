import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
  JSONDoctors
} from "../../assets";
import { Header, ListDoctor } from "../../components";
import { colors } from "../../utils";

export default function ChooseDoctor({ navigation }) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={JSONDoctors.data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <ListDoctor
            key={item.id}
            type="choose-doctor"
            img={DummyDoctor4}
            name={item.name}
            message={item.gender}
            onPress={() =>
              navigation.navigate("ChatRoom", {
                doctor: item,
              })
            }
          />
        )}
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
