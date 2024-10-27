import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, Linking } from 'react-native';
import { News } from './Framework/Screens/News';
import Profile from './Framework/Screens/Profile';
import Login from './Framework/Screens/Login';
import Intro from './Framework/Screens/Intro';
import { StackNavigator } from './Framework/Navigation/Stack';


export default function App() {
  
  

  return (
    <View style={{flex:1}}>
        <StackNavigator/>
        
    </View>
  );
}
