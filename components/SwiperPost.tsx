import React, { useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
} from 'react-native';
import HStack from './HStack';
import { ScrollView } from 'react-native-gesture-handler';

type swiperProps = {
    navigation?: any;
    newsData?: { id: string; title: string }[];
}


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SwiperPost = ({ navigation, newsData }: any) => {

    const scrollViewRef = useRef(null);

    const handleScroll = (event: any) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.floor(contentOffset / Dimensions.get('window').width);
    };

    const scrollToIndex = (index: number) => {
        if (scrollViewRef.current) {
            const offsetX = index * Dimensions.get('window').width;
            const scrollToOptions = { x: offsetX, animated: true };
            scrollViewRef.current.scrollTo(scrollToOptions);
        };
    };


    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {Array.isArray(newsData) && newsData.length > 0 ? (
                    newsData.map((newsItem: any, index: number) => (
                        <View key={newsItem.id} style={styles.slide}>
                            <Image source={{ uri: newsItem.image }} style={styles.image} />
                            <Text>{newsItem.title}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No latest posts are availabe for slider</Text>
                )}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        height: height / 3,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
    },
    slide: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        width: width / 1.35,
        height: height / 3,
        borderRadius: 12,
        marginRight: 20,
    },

});

export default SwiperPost;

