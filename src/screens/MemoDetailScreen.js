import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from "firebase";


const dateString = (date)=>{
    const str = date.toDate().toISOString();
    return str.split('T')[0];
};

class MemoDetailScreen extends React.Component{

    state = {
        memo:{},
    }

    componentWillMount(){
        //ここのparamsは、MemoList画面から渡ってきたもの
        const { params } = this.props.navigation.state;
        this.setState({memo: params.memo});
    }

    returnMemo(memo){
        //Edit画面からDetail画面に遷移した瞬間に発動
        //MemoEditScreenで編集されたmemoの内容をstateに更新する
        this.setState({memo:memo});
    }

    //メモ削除のロジック
    onPressTrash(){
        // fireabaseから該当メモを取得する
        const db = firebase.firestore();
        const { currentUser } =firebase.auth();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.memo.key)
        // 削除
        .delete()
        .then(()=>{ 
        //前の画面に戻る
        this.props.navigation.goBack(); 
        })
        .catch((error) =>{
            console.error( error);        
        });
    }
    
    render(){
        const {memo} = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View style={styles.memoHeaderContents}>
                    <Text style={styles.memoHeaderTitle}>{memo.body.substring(0,10)}</Text>
                    <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton 
                    name='pencil' 
                    color='white' 
                    style={styles.editButton} 
                    onPress={() => {this.props.navigation.navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); }} 
                />

                <CircleButton 
                    name='trash' 
                    color='white' 
                    style={styles.trashButton} 
                    onPress={this.onPressTrash.bind(this)}
                />
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

    memoHeaderContents:{
        marginLeft: 15,
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

    memoContent: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        flex: 1,
    },

    memoBody:{
        lineHeight: 25,
        fontSize: 20,
    },

    editButton: {
        top: 75,
        right: 80,

    },

    trashButton: {
        top: 75,
        right: 15,
    },

});
export default MemoDetailScreen;