import React, { Children } from 'react';
import {
    View,
    StyleSheet,
    ViewStyle
} from 'react-native';


type HStackProps = {
    children: React.ReactNode;
    style?: ViewStyle;
}


const HStack = ({ children, style }: HStackProps) => {
    return(
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FJFJFJ'
    },

});

export default HStack;