import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';

export default function ButtonIconSend({disable, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container(disable)}
      onPress={disable ? null : onPress}
    >
      {disable ? <IconSendDark /> : <IconSendLight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable
      ? colors.border.primary
      : colors.button.active.background,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});