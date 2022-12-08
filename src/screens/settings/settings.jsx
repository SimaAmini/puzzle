import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import { Text } from '@core/components';
import { useTheme } from '@core/hooks/use-theme';
import Screen from '@core/layout/screen';

export const Settings = () => {
  const { setTheme, getTheme, getColors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(getTheme());

  const colors = getColors();

  const toggleSwitch = (isDark) => {
    setTheme(isDark);
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Screen>
      <View style={styles.scrollView}>
        <View style={styles.container}>
          <Text>Dark Theme</Text>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
