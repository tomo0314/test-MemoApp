import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class MemoList extends React.Component {
    render(){
        return(
            <View style={styles.memoList}>  
                <View style={styles.memoListItem}>  
                <Text　style={styles.memoTitle}>samples</Text>
                <Text　style={styles.memodata}>2019/09/23</Text>
                </View>
        
                <View style={styles.memoListItem}>  
                <Text　style={styles.memoTitle}>samples</Text>
                <Text　style={styles.memodata}>2019/09/23</Text>
                </View>
        
                <View style={styles.memoListItem}>  
                <Text　style={styles.memoTitle}>samples</Text>
                <Text　style={styles.memodata}>2019/09/23</Text>
                </View>
        
                <View style={styles.memoListItem}>  
                <Text　style={styles.memoTitle}>samples</Text>
                <Text　style={styles.memodata}>2019/09/23</Text>
                </View>
        
                <View style={styles.memoListItem}>  
                <Text　style={styles.memoTitle}>samples</Text>
                <Text　style={styles.memodata}>2019/09/23</Text>
                </View>

                <View style={styles.memoAddButton}>  
                <Text style={styles.memoAddButtonTitle}>+</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    memoList: {
        width: '100%',
        flex: 1,
    },
    
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },

    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },

    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
});

export default MemoList;
