import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { bellIcon, Union } from "../assests/Images"
import NowShowingCard from "../common/NowShowingCard"
import axios from "axios";
import PopularCard from "../common/PopularCard";

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'
const Home = ({navigation}) => {

    //---------- state, redux state, veriable and hooks
    const [nowShowing, setNowShowing] = React.useState([])
    const [popular, setPopular] = React.useState([])
    const getNowShowing = () => {

        let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${'a6f6139634800c85fc2bc3327de6e0c8'}`

        axios.get(url)
            .then(function (response) {
                // console.log(response?.data);
                setNowShowing(response?.data?.results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getPopilar = () => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${'a6f6139634800c85fc2bc3327de6e0c8'}&language=en-US&page=1`

        axios.get(url)
            .then(function (response) {
                // console.log(response?.data);
                setPopular(response?.data?.results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {

        getNowShowing()
        getPopilar()
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
                renderItem={item =>{return( 
                <TouchableOpacity
                onPress={()=>navigation.navigate('MovieDetails',{item})}
                >
                <NowShowingCard item={item} imageBaseUrl={imageBaseUrl} />
                </TouchableOpacity>
                )}}
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
                renderItem={item => {return(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('MovieDetails',{item})}
                    >
                <PopularCard item={item} imageBaseUrl={imageBaseUrl} />
                </TouchableOpacity>
                )}}
                style={{ marginRight: 24 }}
                keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
    )
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