import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from "firebase";

class MemoEditScreen extends React.Component {
    state = {
        body: '',
        key: '',
    }

    componentWillMount(){
        const { params } = this.props.navigation.state;
        this.setState({
            body : params.memo.body,
            key : params.memo.key,  
        });
    }

    handlePress(){
        // fireabaseから該当メモを取得する
        const db = firebase.firestore();
        const { currentUser } =firebase.auth();
        const newDate = firebase.firestore.Timestamp.now();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
        // 編集して同じ場所に保存
        .update({
            body: this.state.body,
            createdOn: newDate,
        })
        .then(()=>{ 
            const {navigation }=this.props;
            navigation.state.params.returnMemo({
                body: this.state.body,
                key:this.state.key,
                createdOn:newDate,
            });
            //前の画面に戻る
            this.props.navigation.goBack();           
        })
        // エラー文
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
                        value={this.state.body} 
                        onChangeText={(text)=>{this.setState({body: text }); }}
                    />
                </View>
                <CircleButton style={styles.checkButton} name='check' onPress={this.handlePress.bind(this)} />
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

    checkButton: {
        marginBottom: 300,
    }


});

export default MemoEditScreen;