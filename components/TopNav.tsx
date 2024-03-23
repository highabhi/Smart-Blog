import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
} from 'react-native';
import HStack from './HStack';
import VStack from './VStack';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const TopNav = ({ }) => {

    return (
        <HStack style={styles.container}>
            <View style={styles.avatarContainer}>
                <Text>P</Text>
            </View>
            <Text style={styles.head}>Smart Blog</Text>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#F5F5F5',
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        height: height / 19,
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderColor: 'gray',
    },
    head: {
        fontSize: 18,
    },
    avatarContainer: {
        borderWidth: 1,
        borderRadius: 50,
        width: width / 10,
        height: height / 20,
        alignItems: 'center',
        justifyContent: 'center',


        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 5 }, 
        // shadowOpacity: 0.3, 
        // shadowRadius: 10, 
    },

})

export default TopNav;

