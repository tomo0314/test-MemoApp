import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Appbar extends React.Component{
    render(){
        return(
            <View style={styles.appbar}>
                <View>
                <Text style={styles.appbarTitle}>MEMOT</Text>
                </View>
          </View>
    
        );
    }
}

const styles= StyleSheet.create({
    appbar: {
        position: 'absolute',
        top: 0,
        height:78,
        left: 0,
        right: 0,
        paddingTop: 30,
        backgroundColor: '#265366',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {widdth: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex: 10,
      },
    
      appbarTitle: {
        color: '#fff',
        fontSize: 18,
      },    
})

export default Appbar;