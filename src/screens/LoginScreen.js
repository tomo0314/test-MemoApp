import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';

class LoginScreen extends React.Component {

    state = {
        email : 'user2@gmail.com',
        password :'password2',
    }

    navigateToHome(){
        const resetAction = StackActions.reset({
            index : 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);

    }

    handlePress(){
        this.props.navigation.navigate('Signup');
    }

    handleSubmit(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.navigateToHome();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput 
                style={styles.input} 
                value={this.state.email} 
                onChangeText={(text) => {this.setState({email: text}); }} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email Address"
                />
                
                <TextInput 
                style={styles.input} 
                value={this.state.passsword} 
                onChangeText={(text) => {this.setState({password: text}); }}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry
                />
                
                <TouchableHighlight style={styles.button} underlayColor='#C70F66' onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonTitle}>ログイン</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text　style={styles.signupText}>
                        アカウントをお持ちでない方はこちら
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },

    input: {
        backgroundColor: '#eee',
        height: 48,  
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
    },

    button: {
        backgroundColor: '#E31676',
        height: 48,
        width: '70%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },

    signup:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop : 20,
    },

    signupText: {
        fontSize: 14,
        color: "#666666",
    }
});

export default LoginScreen;