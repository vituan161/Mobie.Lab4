import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Contacts from './src/Contact';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import {Provider} from 'react-redux';
import store from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}

function FavoritesScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      barStyle={{backgroundColor: 'blue'}}
      labeled={false}
      activeColor={'grey'}
      inactiveColor={'grey'}>
      <Tab.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />
      <Tab.Screen name="FavoritesScreens" component={FavoritesScreens}
        options={{
          tabBarIcon: 'star-check',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
