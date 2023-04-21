import React from "react";
import { View, StyleSheet, Text, Image, Pressable, TextInput, ScrollView } from "react-native";
import { BBtn, Btn1, Btn2 } from "../Componet/Btn";

const Login = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate('Index')
    }


    const handleBtn1 = () => {
        navigation.navigate('HomeTabScreen');
    }

    const handleBtn2 = () => {
        navigation.navigate('LoginOTP');
    }

    const handleForget = () => {
        navigation.navigate('ForgotPass');
    }

    return (
        <ScrollView style={styles.body} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: "column" }} >
            <View>
                <BBtn handleBack={handleBack} />
                <Text style={styles.text}>Let's get </Text>
                <Text style={[{ marginBottom: 25 }, styles.text]}>you signed in </Text>
            </View>
            <View style={styles.flex}>
                <TextInput placeholder="Phone, email or username" style={styles.input} placeholderTextColor='rgb(174, 174, 174)' />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor='rgb(174, 174, 174)' />
                <Pressable onPress={handleForget}>
                    <Text style={[styles.pass]}>Forgot password?</Text>
                </Pressable>
            </View>
            <View style={{ marginBottom: 12 }}>
                <Btn1 handleBtn1={handleBtn1} title='Login' />
            </View>
            <View style={styles.btn_wrapper}>
                <Btn2 handleBtn2={handleBtn2} title='Login via OTP' />
            </View>
            <Text style={[styles.reg]}>Don't have account? <Text style={{ color: '#211E8A', }} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
    text: {
        fontSize: 30,
        color: '#000',
        lineHeight: 30,
        fontFamily: 'RobotoCondensed-Regular',
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        color: '#211E8A',
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 18,
        marginBottom: 15,
        backgroundColor: '#0E0E240D',
    },
    pass: {
        color: '#211E8A',
        textAlign: 'right',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 15,
        marginBottom: 20,
    },
    btn_wrapper: {
        flexDirection: "column",
        // justifyContent: 'space-between'
    },
    flex: {
        flex: 1
    },
    reg: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 15,
        marginTop: 40,
    }
})

export default Login