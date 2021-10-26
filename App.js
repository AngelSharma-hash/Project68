import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Face from './screens/fb';
import Indianfb from './screens/in';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render(){
  return (
    <View>
    <Text style={styles.Heads}>App</Text>
    <AppContainer></AppContainer>
    
    </View>
  );}
}

const styles = StyleSheet.create({
  Heads:{
    marginTop:150,
    marginBottom:200,   
    textAlign:"center"
  }
});

const Navitgator = createBottomTabNavigator({
  HomefbScreen: {screen: ()=><Face/>},
  IndianfbScreen: {screen: ()=><Indianfb/>}
})

const AppContainer = createAppContainer(Navitgator)
