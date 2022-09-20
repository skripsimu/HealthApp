import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { DummyDoctor2 } from '../../assets';
import {Button, Gap, Header, Input, UserProfileHeader} from '../../components'
import { colors } from '../../utils';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" />
      <UserProfileHeader img={DummyDoctor2} iconType="remove" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formWrapper}>
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formWrapper: {
    paddingHorizontal: 40
  }
});