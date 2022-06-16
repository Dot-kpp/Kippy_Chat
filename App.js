import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './pages/dashboard';
import Home from './pages/home';
import ChatWindow from './pages/chatWindow';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import ForgotForm from './pages/forgotForm';
import ChatLog from './pages/chatLog';
import Contacts from './pages/contacts';
import Settings from './pages/settings';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={ChatWindow} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Log In" component={SignIn} />
        <Stack.Screen name="New: " component={ChatLog} />
        <Stack.Screen name="Reset Form" component={ForgotForm} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  };

export default App;
