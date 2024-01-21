import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import HStack from './HStack';


const TopNav = ({}) => {

    return (
        <HStack style={styles.container}>
            <Text>NEWS</Text>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
    },

})

export default TopNav;

