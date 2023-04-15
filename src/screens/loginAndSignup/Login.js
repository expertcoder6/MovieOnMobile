// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { facebook, google } from '../../assests/Images';
import CustomTextInput from '../../common/CustomTextInput';
import { serverRequest } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.MovieData)

  React.useEffect(() => {
    console.log('login', currentUser)
  }, [currentUser?.login_data_pocket])


  return (
    <View style={styles.mainBody}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          marginTop: 50
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/512px-Tmdb.new.logo.svg.png" }}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 60,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { }
                }
                placeholder="Enter Email"
              />
            </View>
            <View style={styles.SectionStyle}>
              <CustomTextInput
                onChangeText={(text) => { }
                }
                placeholder="Enter Password"
              />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 50, marginVertical: 10 }}>
              <TouchableOpacity style={{ flexDirection: "row" }}>

                <Image
                  source={google}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    marginRight: 8
                  }}
                />
                <Text style={{ color: "red", textAlign: "center", marginTop: 5, fontWeight: "500", fontSize: 17 }}>Google</Text>

              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row" }}>

                <Image
                  source={facebook}
                  style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain',
                    marginRight: 8
                  }}
                />

                <Text style={{ color: "#0c3fa6", textAlign: "center", marginTop: 7, fontWeight: "500", fontSize: 17 }}>FaceBook</Text>

              </TouchableOpacity>

            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() =>
                 navigation.navigate('TabNavigation')
                // dispatch(serverRequest({
                //   key: 'login_data_pocket',
                //   type: 'get',
                //   data: { id: 2 }
                // }))
              }
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Signup')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',

  },
  registerTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});