import React, { Children } from 'react'
import {
    View, 
    StyleSheet
} from 'react-native'

type PaperProps = {
    children: React.ReactNode
}

const Paper = ({  children }: PaperProps) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    }
});

export default Paper;