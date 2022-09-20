import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor5 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ChatItem({message, date, isMine}) {
  return (
    <View style={styles.container(isMine)}>
      <View style={styles.contentItem}>
        {!isMine && <Image source={DummyDoctor5} style={styles.img} />}
        <View>
          <View style={styles.content(isMine)}>
            <Text style={styles.message(isMine)}>{message}</Text>
          </View>
          <Text style={styles.date(isMine)}>{date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (isMine) => ({
    paddingHorizontal: 16,
    marginBottom: 20,
    alignItems: isMine ? "flex-end" : "flex-start",
  }),
  img: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  content: (isMine) => ({
    backgroundColor: isMine ? colors.cardLight : colors.primary,
    padding: 12,
    borderRadius: 10,
    borderBottomLeftRadius: isMine ? 10 : 0,
    borderBottomRightRadius: isMine ? 0 : 10,
  }),
  contentItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: '75%',
  },
  message: (isMine) => ({
    color: isMine ? colors.text.primary : colors.white,
    textAlign: "left",
    fontSize: 14,
    fontFamily: fonts.primary[400],
  }),
  date: (isMine) => ({
    fontSize: 11,
    marginTop: 8,
    textAlign: isMine ? 'right' : 'left',
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  }),
});