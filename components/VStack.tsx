import React, { Children } from 'react';
import {
    View,
    StyleSheet,
    ViewStyle
} from 'react-native';


type VStackProps = {
    children: React.ReactNode;
    style?: ViewStyle;
}


const VStack = ({ children, style }: VStackProps) => {
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

export default VStack;