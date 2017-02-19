import React, {Component} from 'react';
import {Text, TouchableHighlight, StyleSheet,View} from 'react-native';

export class Todolist extends Component {

    _navigator() {
        this.props.navigator.push({
            name: 'Todo'
        })
    }

    render() {
        return (
            <TouchableHighlight onPress={ this._navigator.bind(this) }>
                <Text>Go to todo</Text>
            </TouchableHighlight>
        );
    }
}
