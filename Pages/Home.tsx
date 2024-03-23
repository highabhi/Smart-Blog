import React from "react";
import { 
    View, 
    Dimensions,
    Text, 
    StyleSheet
} from 'react-native'
import Paper from "../components/Paper";
import TopNav from "../components/TopNav";
import SwiperPost from "../components/SwiperPost";
import TopTile from "../components/topTile";
import BottomNav from "../components/BottomNav";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = ({ navigation }: any) => {
    const newsData = [
        {id: '1', title: 'news 1', image: './assets/test.jpg'},
        {id: '1', title: 'news 1', image: './assets/test.jpg'},
        {id: '1', title: 'news 1', image: './assets/test.jpg'},

    ]

    return (
        <Paper>
            <TopNav />
            <TopTile />
            {/* <SwiperPost navigation='navigation' newsData={newsData} /> */}
            <Text style={{fontFamily: 'Mont-BlackItalic'}}>Home Page </Text>           
            {/* <BottomNav /> */}
        </Paper>
    )
};


const styles = StyleSheet.create({
    container: {

    },

});


export default Home;