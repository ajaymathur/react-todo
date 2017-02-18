import React, {Component} from 'react';
import {Text, TouchableHighlight, TextInput, View, Button, StyleSheet} from 'react-native';

export class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = { text : 'Placeholder'}
    }

    render() {
        return (
            <View style={buttonStyles.addItem}>
                <TextInput
                style = {{height: 40}}
                onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    title='Add'
                    onPress={() => null}
                />
            </View>
        );
    }
}

var buttonStyles = StyleSheet.create({
    addItem: {
        borderWidth: 1,
        borderColor: '#0000ff',
    }
})
