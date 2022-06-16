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
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
          style={{
            resizeMode: 'center',
            height: 80,
            width: 50,
            alignSelf: 'center',
            marginTop: 50,
          }}
          source={require('../assets/kippychatlogonoback.png')}
        />
        <View>
          <View style={styles.ButtonSection2}>
            <Button
              color={`#FF5743`}
              title="     !!**Clean Up**!!     "
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <View style={styles.ButtonSection}>
            <Button
              color={`#9370db`}
              title="      Chat      "
              onPress={() => navigation.navigate('New: ')}
            />
            <Text> </Text>
            <Button
              color={`#9370db`}
              title="    Contacts    "
              onPress={() => navigation.navigate('Contacts')}
            />
            <Text> </Text>
            <Button
              color={`#9370db`}
              title="    Settings    "
              onPress={() => navigation.navigate('Settings')}
            />
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Button
              color={`#FF7B6C`}
              title="    Log Out    "
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    width: '100%',
    height: '100%',
    paddingHorizontal: 0,
    backgroundColor: 'white',
  },
  ButtonSection: {
    marginTop: 100,
    margin: 70,
  },
  ButtonSection2: {
    marginTop: 40,
    margin: 30,
  },
});

export default Home;
