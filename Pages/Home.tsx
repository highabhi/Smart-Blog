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


const Home = ({ navigation }: any) => {
    const newsData = [
        {id: '1', title: 'news 1', image: './assets/test.jpg'},
        {id: '2', title: 'news 2'},
    ]

    return (
        <Paper>
            <TopNav />
            <SwiperPost navigation='navigation' newsData={newsData} />
            <Text>Home Page</Text>           
        </Paper>
    )
};


const styles = StyleSheet.create({
    container: {

    },

});


export default Home;