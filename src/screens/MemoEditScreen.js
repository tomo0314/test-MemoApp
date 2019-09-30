import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';


class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <TextInput style={styles.textInput} multiline value='Hello World!' />
                </View>
                <CircleButton name='check' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingBottom: 32,
        paddingRight: 16,
        paddingLeft: 16,
        fontSize: 16,
    }
});

export default MemoEditScreen;