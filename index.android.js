/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Root from './root';
import Login from './login';
import Register from './registration';

export default class CreatingNavigation extends Component {

  renderScene(route, navigator) {
    if(route.name === 'root') {
      return <Root navigator={navigator}/>
    }
    if(route.name === 'login') {
      return <Login navigator={navigator} />
    }
    if(route.name === 'registration') {
      return <Register navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'root'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CreatingNavigation', () => CreatingNavigation);
