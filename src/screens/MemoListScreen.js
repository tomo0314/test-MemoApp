import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from "firebase";

class MemoListScreen extends React.Component {
    state = {
        //snapShotからメモデータのみを取り出したもの
        memolist:[],
    }

    componentWillMount(){
        const{ currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection(`users/${currentUser.uid}/memos`)
            //firebaseをリアルタイムで取得
            .onSnapshot((snapShot)=>{
                const memoList = [];
                snapShot.forEach((doc) =>{
                    memoList.push({...doc.data(), key:doc.id });
                })
                this.setState({memoList: memoList });
            })

            //旧コード（notリアルタイム）
            /*
            .get()
            .then((snapShot)=>{
                const memoList = [];
                snapShot.forEach((doc) =>{
                    memoList.push({...doc.data(), key:doc.id });
                })
                this.setState({memoList: memoList });
            })
            .catch((error)=>{
                console.log(error);
            })
            */
    }

    handlePress(){
        const {params} = this.props.navigation.state;
        this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser })
    }
    
    render(){
        return (
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
                <CircleButton name='plus' onPress={this.handlePress.bind(this)}/>    
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor:'#FFFDF6',
      },   
});

export default MemoListScreen;