import { Keyboard, StyleSheet, TextInput } from "react-native"



const CustomTextInput=({onChangeText ,placeholder})=>{

    return(
        <>
          <TextInput
                style={styles.inputStyle}
                onChangeText={(text) =>
                    onChangeText(text)
                }
                placeholder={placeholder}
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
        </>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
      },
      
})