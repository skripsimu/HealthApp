import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import { IconAddAvatar, IconRemoveAvatar } from '../../../assets';

export default function UserProfileHeader({ img, title, subtitle, iconType}) {
  const Icon = () => {
    if (iconType === "remove") {
      return <IconRemoveAvatar style={styles.addPhoto} />;
    } else if (iconType === "add") {
      return <IconAddAvatar style={styles.addPhoto} />;
    }
  };
  return (
    <View style={styles.profileAvatar}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} source={img} />
        <Icon style={styles.addPhoto}/>
      </View>
      {title && <Text style={styles.name}>{title}</Text>}
      <Text style={styles.job}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileAvatar: { alignItems: "center" },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.border.primary,
    borderRadius: 130 / 2,
  },
  addPhoto: {
    position: "absolute",
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    marginTop: 26,
    color: colors.text.default,
    textAlign: "center",
    fontFamily: fonts.primary[600],
  },
  job: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: "center",
    color: colors.text.secondary,
  },
});