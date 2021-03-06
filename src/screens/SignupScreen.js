import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class SignupScreen extends React.Component {
    state = {
        email:'',
        password:'',
        }

    handleSubmit(){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.props.navigation.navigate('Login');
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign Up
                </Text>
                <TextInput 
                style={styles.input} 
                value={this.state.email} 
                onChangeText={(text)=>{ this.setState({ email: text}); }}
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
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableHighlight>
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
});

export default SignupScreen;