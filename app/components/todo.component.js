import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

import { AddItem } from './addItem.component';

export class Todo extends Component {

    _navigator() {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={todoStyles.totoAddItem}>
                <AddItem/>
            </View>
        );
    }
}

var todoStyles = StyleSheet.create({
    totoAddItem:{
    }
})
