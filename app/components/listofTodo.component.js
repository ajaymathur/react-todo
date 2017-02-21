import React, {Component, PropTypes} from 'react';
import {View, ListView, Text, StyleSheet} from 'react-native';

class ListofTodo extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    taskToggled(rowData) {
        this.props.taskToggled(rowData.id);
    }

    _stylesCalculator(isCompleted) {
        var obj = {
            fontSize: 20,
            backgroundColor: '#00ff00',
        }
        return isCompleted === 0 ? obj : {...obj, textDecorationLine: 'line-through'}
    }

    render() {
        const {dataList} = this.props;
        let dataRows = this.ds.cloneWithRows(dataList);
        return(
            <ListView
                
                dataSource = {dataRows}
                renderRow={(rowData) => 
                        <View>
                            <Text onPress={this.taskToggled.bind(this, rowData)} style={rowData.completed === 0 ? styles.list : styles.listCompleted}>{rowData.title}</Text>
                        </View>
                    }
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        backgroundColor: '#00ff00',
    },
    listCompleted: {
        fontSize: 20,
        backgroundColor: '#00ff00',
        textDecorationLine: 'line-through'
    }
})

export default ListofTodo;
