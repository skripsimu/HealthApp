import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, ProfileItem, UserProfileHeader } from '../../components';
import { DummyDoctor1 } from '../../assets';
import { colors } from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <UserProfileHeader
        title="Budi Sutini"
        subtitle="Dentis"
        iconType="female"
        img={DummyDoctor1}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Gajahmada" />
      <ProfileItem
        label="Tempat Praktik"
        value="Jogyakarta Internasional Hospital"
      />
      <ProfileItem label="No STR." value="232431212313" />
      <View style={styles.action}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});