import React, {useState, useRef} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const topTile = ({ }) => {

    return (
        <View>
            <Text>Hey</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {

    },

});


export default topTile;