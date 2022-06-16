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

const ForgotForm = ({navigation}) => {
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
        <View>
          <Text style={{alignSelf: 'center', fontSize: 25}}>Need Help?</Text>
        </View>
        <View style={styles.sectionContainer}>
        </View>
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Name" />
        </View>
        <View style={styles.sectionContainer}>
          <TextInput placeholder="Email" />
        </View>

        <View style={styles.sectionContainer2}>
          <Button
            color={`#9370db`}
            title="    Submit    "
            onPress={() => navigation.navigate('Home')}
          />
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

export default ForgotForm;
