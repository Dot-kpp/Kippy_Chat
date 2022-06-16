import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Home = ({ navigation }) => {

  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

    
  };
  
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <View style={{backgroundColor: '#FFFFD7'}}>
          <Image
            style={{
              resizeMode: 'center',
              height: 200,
              width: 200,
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 35,
            }}
            source={require('../assets/kippychatlogonoback.png')}
          />
          </View>
          
          <Section title="Kippy Chat">
            <Text style={(styles.highlight, styles.baseText)}>
              Purr-efct Purr-ivacy
            </Text>
          </Section>
        </View>

        <Section>
          <Button
            color={`#9370db`}
            title="      Log in      "
            onPress={() => navigation.navigate('Log In')}
          />
          <Text>    </Text>
          <Button
            
            color={`#9370db`}
            title="    Sign up    "
            onPress={() => navigation.navigate('Signup')}
          />
        </Section>

        <Section>
          <Text style={{fontSize: 15}}>{"\n"}{"\n"}{"\n"}Created by HENCHH studio</Text>
        </Section>
        <Image
            style={{
              resizeMode: 'center',
              height: 30,
              width: 200,
              alignSelf: 'center',
            }}
            source={require('../assets/HENCHH.png')}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#FFFFD7',
    width: "100%",
    marginTop: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 60,
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sectionDescription: {
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    padding: 5,
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  baseText2: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Home;
