import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ListDoctor } from "../../components/molecules";
import { colors, fonts } from "../../utils";
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from "../../assets";

export default function Messages() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      img: DummyDoctor1,
      name: "Alexander Jannie",
      message: "Baik ibu, terima kasih banyak atas wakt...",
    },
    {
      id: 2,
      img: DummyDoctor2,
      name: "Nairobi Putri Hayza",
      message: "Oh tentu saja tidak karena jeruk it...",
    },
    {
      id: 3,
      img: DummyDoctor3,
      name: "John McParker Steve",
      message: "Oke menurut pak dokter bagaimana unt...",
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <ListDoctor
              key={doctor.id}
              name={doctor.name}
              message={doctor.message}
              img={doctor.img}
            />
          );
        })}
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
  },
});
