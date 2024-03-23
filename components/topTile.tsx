import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import axios from "axios";
import Carousel from "./Carousel";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//APi Key
// const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}'
// const apiUrl = 'http://api.weatherapi.com/v1'
// // console.log('API URL: ', apiUrl);


// const apiKey = '07d12ebffe604938611f134c168ce124';
// const lat = '16.5062';
// const long = '80.6480';
// const part = ''


//Fetch request from api server for weather data


const TopTile = ({ }) => {

    return (
        <View>
            <Text>Hey</Text>

            {/* Carousel with default props */}
            <Carousel>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                    <Text>Slide 1</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'green' }}>
                    <Text>Slide 2</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'blue' }}>
                    <Text>Slide 3</Text>
                </View>
            </Carousel>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {

    },

});


export default TopTile;