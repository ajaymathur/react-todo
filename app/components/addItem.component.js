import React, {Component, propTypes} from 'react';
import {Text, TouchableHighlight, TextInput, View, Button, StyleSheet} from 'react-native';

export class AddItem extends Component {

    props: {
        buttonAction: string,
    };

    static propTypes = {
        buttonAction: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { text : 'Placeholder'}
    };

    _addItem() {
        this.props.buttonAction(this.state.text);
    }

    render() {
        const {buttonAction} = this.props;

        return (
            <View style={buttonStyles.addItem}>
                <TextInput
                style = {{height: 40}}
                onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    title='Add'
                    onPress={this._addItem.bind(this)}
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
