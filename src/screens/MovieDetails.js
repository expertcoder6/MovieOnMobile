import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe";
import { Arrow, FeaturesIcon, Star } from "../assests/Images";
import axios from "axios";

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'
const MovieDetails = ({ navigation, route }) => {
    //---------- state, redux state, veriable and hooks
    const { params } = route
    const [moviesDetails, setMoviesDetails] = React.useState([])
    const [videoKey, setVideoKey] = React.useState([])
    const [cast, setCast] = React.useState([])

    useEffect(() => {
        getPopilar()
        getMoviesVideo()
        getCast()
    }, [])

    const getPopilar = () => {
        let url = `https://api.themoviedb.org/3/movie/${params?.item?.item?.id}?api_key=${'a6f6139634800c85fc2bc3327de6e0c8'}&language=en-US`
        axios.get(url)
            .then(function (response) {
                // console.log(response?.data);
                setMoviesDetails(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getMoviesVideo = () => {
        let url = `https://api.themoviedb.org/3/movie/${params?.item?.item?.id}/videos?api_key=${'a6f6139634800c85fc2bc3327de6e0c8'}&language=en-US`
        axios.get(url)
            .then(function (response) {
                // console.log(response?.data?.results);
                if (response?.data) {
                    response?.data?.results.map((item) => {
                        if (item?.type === "Trailer") {
                            setVideoKey(item)

                        }

                    })
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getCast = () => {
        let url = `https://api.themoviedb.org/3/movie/${params?.item?.item?.id}/credits?api_key=${'a6f6139634800c85fc2bc3327de6e0c8'}&language=en-US`
        axios.get(url)
            .then(function (response) {
                // console.log(response?.data);
                setCast(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const ItemDivider = () => {
        return (
            <View
                style={{
                    height: "100%",
                    width: 13,
                }}
            />
        );
    }

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
      
        return `${hours}h ${minutes}min `
      }
    return (
        <ScrollView>
            <TouchableOpacity
            onPress={()=>navigation.goBack()
            }
            style={{ position: "absolute", top: 58, zIndex: 1, left: 28 }}>
                <Image
                    source={Arrow}
                />

            </TouchableOpacity>
            <YoutubePlayer
                height={250}
                videoId={videoKey?.key}
            // onReady={(item)=>)}
            />
            <View style={{ marginHorizontal: 24, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", maxWidth: 198 }}>{moviesDetails?.original_title}</Text>
                    <Image
                        source={FeaturesIcon}
                    />

                </View>
                <View style={styles.row}>

                    <Image
                        source={Star}
                        resizeMode='contain'
                    />
                    <Text style={{ ...styles.textRatting }}
                        numberOfLines={2}>
                        {moviesDetails?.vote_average + '/10' + " IMDb"}
                    </Text>
                </View>

                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={moviesDetails?.genres}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={item => <Text style={{ ...styles.genresTest }}>{item?.item?.name}</Text>}
                // style={{ marginRight: 24 }}
                />

                <View style={{ ...styles.row, marginTop: 16 }}>
                    <View>
                        <Text style={{ ...styles.textRatting }}>
                            Length
                        </Text>
                        <Text style={{ ...styles.textRatting, color: "#000", marginTop: 4 }}>
                            {/* {moviesDetails?.runtime} */}
                            {toHoursAndMinutes(moviesDetails?.runtime)}
                        </Text>
                    </View>

                    <View style={{ marginHorizontal: 60 }}>
                        <Text style={{ ...styles.textRatting }}>
                            Language
                        </Text>
                        <Text style={{ ...styles.textRatting, color: "#000", marginTop: 4 }}>
                            {moviesDetails?.spoken_languages ? moviesDetails?.spoken_languages[0]?.name : null}
                        </Text>
                    </View>

                    <View>
                        <Text style={{ ...styles.textRatting }}>
                            Popularity
                        </Text>
                        <Text style={{ ...styles.textRatting, color: "#000", marginTop: 4 }}>
                            {moviesDetails?.popularity}

                        </Text>
                    </View>
                </View>

                <Text style={{ ...styles.textStyle, marginTop: 24 }}>
                    Description
                </Text>

                <Text style={{ ...styles.overviewText, marginVertical: 8 }}>
                    {moviesDetails?.overview}
                </Text>

                <Text style={{ ...styles.textStyle, marginTop: 24, marginBottom: 17 }}>
                    Cast
                </Text>

                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={cast?.cast}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={item => <View>
                        <Image
                            source={{ uri: `${imageBaseUrl}${item?.item?.profile_path}` }}
                            resizeMode='cover'
                            style={{ height: 76, width: 72 }}
                        />
                        <Text style={{ marginTop: 4, fontSize: 12, fontWeight: "400", maxWidth: 75 }}>
                            {item?.item?.name}
                        </Text>
                    </View>
                    }

                    // style={{ marginRight: 24 }}
                    ItemSeparatorComponent={ItemDivider}
                />

            </View>
        </ScrollView>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
    },
    textRatting: {
        fontSize: 12,
        fontWeight: '400',
        color: "#9C9C9C",
        marginLeft: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    genresTest: {
        fontSize: 8,
        fontWeight: '700',
        color: "#88A4E8",
        backgroundColor: "#DBE3FF",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: "#DBE3FF",
        overflow: "hidden",
        textAlign: "center",
        marginTop: 16,
        marginRight: 8
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "900",
        color: "#110E47"
    },
    overviewText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#9C9C9C",
        lineHeight: 22
    }
})