import React, {Component} from 'react';
import {Text, View, TextInput ,TouchableHighlight} from 'react-native';

 export default class Register extends Component {

     constructor() {
         super();
         this.state = {
             username: '',
         }
     }

     navigate() {
         this.props.navigator.pop();
     }

     render () {
         return (
             <View>
                <TouchableHighlight onPress={this.navigate.bind(this,'back')}>
                    <Text>
                        &lt;
                    </Text>
                </TouchableHighlight>
                <TextInput
                onChangeText={(username) => {this.setState({username: username})}}
                placeholder='User name'></TextInput>
                <Text>Register page {this.state.username}</Text>
             </View>
         );
     };
 }