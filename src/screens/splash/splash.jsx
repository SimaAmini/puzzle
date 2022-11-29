import { StyleSheet, View } from 'react-native';

import Screen from '@layout/screen';
import { Text } from '@components';

export const Splash = () => {
  return (
    <Screen>
      <View style={styles.scrollView}>
        <View style={styles.container}>
          <Text>Splash</Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    flexGrow: 1,
  },
});
