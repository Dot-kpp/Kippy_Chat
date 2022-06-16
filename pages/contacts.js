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
  SectionList
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Contacts = () => {
  const isDarkMode = useColorScheme() === '';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };
  
  return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Apple', 'Andreanne M']},
            {title: 'B', data: []},
            {title: 'C', data: []},
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'E', data: []},
            {title: 'F', data: []},
            {title: 'G', data: ['Gab']},
            {title: 'H', data: []},
            {title: 'I', data: []},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', 'Jeremie P']},
            {title: 'K', data: []},
            {title: 'L', data: []},
            {title: 'M', data: ['Moth']},
            {title: 'N', data: ['Nancy D']},
            {title: 'O', data: []},
            {title: 'P', data: []},
            {title: 'Q', data: []},
            {title: 'R', data: []},
            {title: 'S', data: []},
            {title: 'T', data: ['Tarik Tata']},
            {title: 'U', data: []},
            {title: 'V', data: []},
            {title: 'W', data: []},
            {title: 'X', data: []},
            {title: 'Y', data: []},
            {title: 'Z', data: [],}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 15,
     fontSize: 24,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },  
});

export default Contacts;