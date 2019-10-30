import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';


class MemoCreateScreen extends React.Component {

    state = {
        body: '',
    }

    handlePress(){
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        db.collection(`users/${currentUser.uid}/memos/`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
        .then(()=>{
            this.props.navigation.goBack();
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <TextInput 
                    style={styles.textInput} 
                    multiline 
                    placeholder="新しいメモを追加しよう！"
                    placeholderTextColor="#888888"
                    value={this.state.body}
                    onChangeText={(text)=>{this.setState({ body: text }); }}
                    />
                </View>
                <CircleButton name='check' style={styles.checkBotton} onPress={this.handlePress.bind(this)} />
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
    },

    checkBotton: {
        marginBottom: 300,
    }
});

export default MemoCreateScreen;