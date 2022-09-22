import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { JSONDoctorCategory } from "../../assets";
import {
  DoctorCategories,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from "../../components";
import { colors, fonts } from "../../utils";

export default function Doctor({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={50} />
          <View style={styles.sectionWrapper}>
            <HomeProfile onPress={() => navigation.navigate("UserProfile")} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <View style={styles.wrapperScroll}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categories}>
                  <Gap width={16} />
                  {JSONDoctorCategory.data.map((item) => {
                    return (
                      <DoctorCategories
                        key={item.id}
                        category={item.category}
                        onPress={() => navigation.navigate("ChooseDoctor")}
                      />
                    );
                  })}
                  <Gap width={6} />
                </View>
              </ScrollView>
            </View>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              name="Budi Sutini"
              desc="Pediatrician"
              onPress={() => navigation.navigate("DoctorProfile")}
            />
            <RatedDoctor
              name="Anita Rianto"
              desc="Dentist"
              onPress={() => navigation.navigate("DoctorProfile")}
            />
            <RatedDoctor
              name="Nadira Amara"
              desc="Bedahis"
              onPress={() => navigation.navigate("DoctorProfile")}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  sectionWrapper: { paddingHorizontal: 16 },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  categories: {
    flexDirection: "row",
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
