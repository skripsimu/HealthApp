import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor3 } from '../../assets';
import { Header, ListItem, UserProfileHeader } from '../../components';
import { colors } from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Profile"
        type="light"
        onPress={() => navigation.goBack()}
      />
      <UserProfileHeader
        img={DummyDoctor3}
        title="Budi Hartono"
        subtitle="Doktor Ortopedi"
      />
      <ListItem
        name="Edit Profile"
        message="Last updated yesterday"
        type="choose-menu"
        icon="edit-profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
      <ListItem
        name="Language"
        message="Last updated yesterday"
        type="choose-menu"
        icon="language"
      />
      <ListItem
        name="Give Us Rate"
        message="Last updated yesterday"
        type="choose-menu"
        icon="rate"
      />
      <ListItem
        name="Help Center"
        message="Last updated yesterday"
        type="choose-menu"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
});