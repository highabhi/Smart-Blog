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
            <Text>NEWS</Text>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#F5F5F5',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        height: height / 19,
        
    },

})

export default TopNav;

