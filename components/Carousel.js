import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    Animated,
    Dimensions,
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    Text,
} from 'react-native';

// type carouselProps = {
//     children?: string;
//     autoplay?: boolean;
//     showPagination?: boolean;
//     autoPlayInterval?: number;
// }


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Carousel = ({ children, autoplay = true, autoPlayInterval = 3000, showPagination = true }) => {

    // const scrollX = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0));
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    //handling manual scrolling event
    const handleScroll = useCallback((event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / width);
        setCurrentIndex(index);
    }, [width]);

    
    useEffect(() => {
        if (autoplay) {
          const autoplayInterval = setInterval(() => {
            scrollViewRef.current?.scrollToOffset({
              offset: (scrollX.getValue() + width) % (width * children.length),
              animated: true,
            });
          }, autoPlayInterval);
      
          return () => clearInterval(autoplayInterval);
        }
      }, [autoplay, autoPlayInterval, children.length, width, scrollX]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: true,
                    listener: handleScroll,
                })}
                scrollEventThrottle={16}
            >
                {children.map((child, index) => (
                    <View key={index} style={{ width }}>
                        {child}
                    </View>
                ))}
            </ScrollView>

            {
                showPagination && (
                    <View style={styles.paginationContainer}>
                        {children.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.paginationDot, index === currentIndex && styles.activeDot]}
                                onPress={() => goToSlide(index)}
                            />
                        ))}
                    </View>
                )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: height / 5,
        width: width / 1,

    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'gray',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: 'black',
    },
})

export default Carousel;