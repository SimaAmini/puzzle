import { StyleSheet, Text, View } from 'react-native';

export const Truncate = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[styles.text, style]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    flex: 1,
  },
});
