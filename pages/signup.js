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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Signup = ({navigation}) => {
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
            height: 50,
            width: 50,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 35,
          }}
          source={require('../assets/kippychatlogonoback.png')}
        />
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Username*" />
        </View>
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Password*" />
        </View>
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Email*" />
        </View>
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Phone Number*" />
        </View>

        <View style={styles.sectionContainer2}>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    height: 50,
    width: '75%',
    marginTop: 25,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
  sectionContainer2: {
    height: 50,
    width: '50%',
    marginTop: 60,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
});

export default Signup;
