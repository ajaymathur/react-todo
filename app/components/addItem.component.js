import React, {Component} from 'react';
import {Text, TouchableHighlight, TextInput, View, Button, StyleSheet,TouchableOpacity} from 'react-native';

export class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = { text : 'Placeholder'}
    }

    render() {
        return (
            <View style={styles.addItem}>
                {/*<TextInput
                style = {{height: 40}}
                onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />*/}
                
                <Button
                    title='Add'
                    style={styles.defaultBtn}
                    onPress={() => null}
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
