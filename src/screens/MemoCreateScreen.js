import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';


class MemoCreateScreen extends React.Component {

    state = {
        body: '',
    }

    handlePress(){
        //ちなみに、uidは以下の取得方法のほうがずっと楽
        // const{ currentUser } = firebase.auth();
        // db.collection(`users/${currentUser.uid}/memos/`).add({

        const {params} = this.props.navigation.state;
        const db = firebase.firestore();
        db.collection(`users/${params.currentUser.user.uid}/memos/`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
        .then((docRef)=>{
            console.log(docRef.id);
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