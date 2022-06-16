import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Button,
  Pressable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Settings = ({navigation}) => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          style={{
            resizeMode: 'center',
            height: 80,
            width: 50,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 50,
          }}
          source={require('../assets/kippychatlogonoback.png')}
        />
        <View style={styles.sectionContainer}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>Page under construction lul </Text>
        </View>
        <View style={styles.sectionContainer2}>
          <Text style={{alignSelf: 'center', fontSize: 17}}>This project is funded by you, the user. If you enjoy the product and want to support it, donations of any amount is greatly appreciated!</Text>
        </View>
        <Button
              color={`#9370db`}
              title="    Donate    "
            />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    width: '75%',
    marginBottom: 50,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
  sectionContainer2: {
    width: '50%',
    marginTop: 50,
    paddingHorizontal: 0,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default Settings;
