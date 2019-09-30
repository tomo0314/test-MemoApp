import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                    <Text style={styles.memoHeaderTitle}>Samples</Text>
                    <Text style={styles.memoHeaderDate}>2019/09/30</Text>
                    </View>
                </View>

                <View style={styles.memoContents}>
                    <Text>
                        これはメモアイテムのサンプルです。
                    </Text>
                </View>

                <CircleButton color='white' style={styles.editButton}>$</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
    },

    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 4,
    },
    
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },

    memoContents: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        flex: 1,
    },

    editButton: {
        top: 75,
    },
});
export default MemoDetailScreen;