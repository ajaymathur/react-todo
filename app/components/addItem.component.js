import React, {Component, propTypes} from 'react';
import {Text, TouchableHighlight, TextInput, View, Button, StyleSheet,TouchableOpacity} from 'react-native';

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

        return (
            <View style={styles.addItem}>
                <TextInput
                style = {{height: 40}}
                onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                
                <Button
                    title='Add event'
                    onPress={this._addItem.bind(this)}
                    style={styles.defaultBtn}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    defaultBtn: {
        backgroundColor:'#ff0000',
        color:'#ffffff',
    }
   
})
