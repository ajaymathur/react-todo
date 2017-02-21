import React, {Component, PropTypes} from 'react';
import {ListView, Text, StyleSheet} from 'react-native';

class ListofTodo extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render() {
        const {dataList} = this.props;
        let dataRows = this.ds.cloneWithRows(dataList);
        return(
            <ListView
                
                dataSource = {dataRows}
                renderRow={(rowData) => <Text style = {styles.list}>{rowData}</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        height: 20,
        backgroundColor: '#00ff00'
    }
})

export default ListofTodo;
