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
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ChatWindow = () => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          width: '100%',
          height: '5%',
        }}>
        <Text style={styles.nameIcon}> JP </Text>
      </View>
      <View style={styles.convoContainer}>
        <View style={styles.chatContainer}>
          <Text style={{margin: 5}}> Hey, wadup?</Text>
        </View>
        <View style={styles.chatContainer2}>
          <Text style={{margin: 5}}>
             Chillin bruh, you?
          </Text>
        </View>
        <View style={styles.chatContainer}>
          <Text style={{margin: 5}}> Chillin..</Text>
        </View>
        <View style={styles.chatContainer2}>
          <Text style={{margin: 5}}> cool</Text>
        </View>
        <View style={styles.chatContainer2}>
          <Text style={{margin: 5}}> ...</Text>
        </View>
        <View style={styles.chatContainer}>
          <Text style={{margin: 5}}> cool</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputContainer2}>
          <TextInput placeholder="Text Message" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Send" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },

  convoContainer: {
    padding: 5,
    width: '100%',
    height: '84%',
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  chatContainer: {
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    width: '60%',
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 5,
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
  chatContainer2: {
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    width: '60%',
    borderWidth: 1,
    marginBottom: 5,
    marginLeft: 5,
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
  inputContainer: {
    width: '100%',
    height: '10%',
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  inputContainer2: {
    backgroundColor: '#737373',
    width: '75%',
    height: '80%',
    alignSelf: 'flex-start',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttonContainer: {
    width: '18%',
    alignSelf: 'flex-end',
    marginLeft: 10,
    marginBottom: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },

  nameIcon: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ChatWindow;
