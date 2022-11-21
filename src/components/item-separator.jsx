import React from 'react';
import { StyleSheet, View } from 'react-native';
// import colors from '../config/colors';

export const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 10,
    // backgroundColor: colors.medium,
  },
});
