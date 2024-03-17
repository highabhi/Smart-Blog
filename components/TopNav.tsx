import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import HStack from './HStack';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const TopNav = ({}) => {

    return (
        <HStack style={styles.container}>
            <Text style={styles.head}>Bloggy</Text>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        height: height / 19,
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        borderColor: 'gray',
    },
    head: {
        fontSize: 18,
    }

})

export default TopNav;

