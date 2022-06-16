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

const Signup = ({navigation}) => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: 'white'}}>
          <Image
            style={{
              resizeMode: 'center',
              height: 80,
              width: 50,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 80,
            }}
            source={require('../assets/kippychatlogonoback.png')}
          />

          <View style={styles.sectionContainer}>
            <TextInput placeholder="Username" />
          </View>
          <View style={styles.sectionContainer}>
            <TextInput placeholder="Password" />
          </View>

          <View style={styles.sectionContainer2}>
            <Button
              color={`#9370db`}
              title="    Log In    "
              onPress={() => navigation.navigate('Dashboard')}
            />
            <View>
              <Pressable onPress={() => navigation.navigate('Reset Form')}>
                <Text
                  style={{
                    fontSize: 12,
                    alignSelf: 'center',
                    marginTop: 10,
                    color: 'blue',
                  }}>
                  Forgot username or password?
                </Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{
                    fontSize: 12,
                    alignSelf: 'center',
                    marginTop: 10,
                    color: 'blue',
                  }}>
                  Need an account?
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    width: '75%',
    marginTop: 20,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
  sectionContainer2: {
    width: '50%',
    height: '100%',
    marginTop: 50,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
});

export default Signup;
