import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { bellIcon, Union } from "../assests/Images"
import NowShowingCard from "../common/NowShowingCard"
import PopularCard from "../common/PopularCard";
import { useDispatch, useSelector } from 'react-redux';
import { serverRequest } from "../Redux/Action/action";
import { apiEndPoind, apiKey } from "../utils";
import CustomLoder from "../common/Loder";

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'
const Home = ({ navigation }) => {

    //---------- state, redux state, veriable and hooks
    const dispatch = useDispatch();
    const [nowShowing, setNowShowing] = React.useState([])
    const [popular, setPopular] = React.useState([])
    const { nowShowing_data_pocket, populer_data_pocket ,loading} = useSelector(state => state.MovieData)

    useEffect(() => {
        if (nowShowing_data_pocket) {
            setNowShowing(nowShowing_data_pocket?.response)
        }
        if (populer_data_pocket) {
            setPopular(populer_data_pocket?.response)
        }
    }, [nowShowing_data_pocket, populer_data_pocket])

    useEffect(() => {

        dispatch(serverRequest({
            key: 'nowShowing_data_pocket',
            endPoint: apiEndPoind?.url_nowShowing
        }))
        dispatch(serverRequest({
            key: 'populer_data_pocket',
            endPoint: apiEndPoind?.url_getPopular
        }))
        // getPopilar()
    }, [])

    const ItemDivider = () => {
        return (
            <View
                style={{
                    height: "100%",
                    width: 16,
                }}
            />
        );
    }
    console.log(loading);
if( loading){
    return <CustomLoder/>
}else{
    return (

        <ScrollView style={styles.mainBody}>
            <View style={styles.headerStyle}>
                <Image
                    source={Union}
                />

                <Text style={styles.textStyle}>
                    FilmKu
                </Text>

                <Image
                    source={bellIcon}
                />
            </View>
            <View style={styles.headerStyle}>

                <Text style={{ ...styles.textStyle }}>
                    Now Showing
                </Text>
            </View>

            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={nowShowing}
                renderItem={item => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MovieDetails', { item })}
                        >
                            <NowShowingCard item={item} imageBaseUrl={imageBaseUrl} />
                        </TouchableOpacity>
                    )
                }}
                style={{ paddingHorizontal: 24 }}
                ItemSeparatorComponent={ItemDivider}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text style={{ ...styles.textStyle, marginVertical: 11, marginLeft: 24 }}>
                Popular
            </Text>
            <FlatList
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={popular}
                renderItem={item => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MovieDetails', { item })}
                        >
                            <PopularCard item={item} imageBaseUrl={imageBaseUrl} />
                        </TouchableOpacity>
                    )
                }}
                style={{ marginRight: 24 }}
                keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
    )
}
   
}

export default Home
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
    },
    headerStyle: {
        marginHorizontal: 24,
        marginVertical: 36,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "900",
        color: "#110E47"
    },
    textBorder: {
        fontSize: 10,
        borderRadius: 15,
        borderColor: "#E5E4EA",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 5,
        color: "#AAA9B1"
    },

})

const dataMovies = [
    "https://images8.alphacoders.com/121/thumbbig-1218962.webp",
    "https://images8.alphacoders.com/121/thumbbig-1218962.webp",
    "https://images8.alphacoders.com/121/thumbbig-1218962.webp",
    "https://images8.alphacoders.com/121/thumbbig-1218962.webp"
]