import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconAddAvatar, ILNoAvatar } from '../../assets'
import { colors, fonts } from '../../utils'
import { Button, Gap, Link } from '../../components'

export default function UploadPhoto() {
  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={ILNoAvatar} />
          <IconAddAvatar style={styles.addPhoto} />
        </View>
        <Text style={styles.name}>Harakiri Kanan</Text>
        <Text style={styles.job}>Mobile Developer</Text>
      </View>
      <View>
        <Button title="Upload and Continue" />
        <Gap height={30} />
        <Link title="Skip for this" align="center" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    backgroundColor: colors.white,
    justifyContent: 'space-between'
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.input.borderColor,
    borderRadius: 130 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.default,
    textAlign: 'center',
    fontFamily: fonts.primary[600]
  },
  job: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary
  }
})