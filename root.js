import React, {Component} from 'react';
import {Text,TouchableHighlight, View} from 'react-native';

 export default class Root extends Component {

     navigate(toPage) {
         this.props.navigator.push({
             name: toPage,
         })
     }

     render () {
         return (
             <View>
                <Text>root page</Text>
                <TouchableHighlight onPress={this.navigate.bind(this,'registration')}>
                    <Text>To register</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navigate.bind(this,'login')}>
                    <Text>To login</Text>
                </TouchableHighlight>
             </View>
         );
     };
 }