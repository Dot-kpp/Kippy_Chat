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
  Pressable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ChatLog = ({navigation}) => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer3}>
            <Text style={{fontSize: 40, alignSelf: 'center'}}>+</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>Jeremie P</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>Moth </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>
              Andreanne M{' '}
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>Gab </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>Nancy D </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Chat')}>
          <View style={styles.sectionContainer}>
            <Text style={{fontSize: 25, alignSelf: 'center'}}>Tarik Tata </Text>
          </View>
        </Pressable>

        <View>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '90%',
    backgroundColor: '#C6A3E5',
    margin: 20,
    alignSelf: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  sectionContainer2: {
    marginTop: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  sectionContainer3: {
    width: '15%',
    backgroundColor: '#74C1FE',
    margin: 20,
    alignSelf: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default ChatLog;
