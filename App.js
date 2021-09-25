import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_83ut_OzwGjow7E63d0DVItTBojBNTqI",
  authDomain: "react-native-chat-app-60a3b.firebaseapp.com",
  projectId: "react-native-chat-app-60a3b",
  storageBucket: "react-native-chat-app-60a3b.appspot.com",
  messagingSenderId: "503654647025",
  appId: "1:503654647025:web:6061b47a7b9e696fb11550",
  measurementId: "G-X5ELD63SHP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
