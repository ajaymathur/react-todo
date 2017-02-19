import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

import { AddItem } from './addItem.component';

export class Todo extends Component {

    _navigator() {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={styles.toDoAddItem}>
                <View style={styles.addItemForm}></View>
                <AddItem style={styles.addSubmit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toDoAddItem:{
        flex:1,
    },
    addItemForm:{
        flex:2,

    },
    addSubmit:{
        flex:1,
        justifyContent:'flex-end',

    }

})
