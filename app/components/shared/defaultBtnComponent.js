import React, {Component, Proptypes} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export class CustomButton extends Component {
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <View><Text>Pragya</Text></View>
    </TouchableHighlight>
        )
    }
}