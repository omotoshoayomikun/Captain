import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Btn1, Btn2 } from "../Componet/Btn";

const Index = ({ navigation }) => {

    const handleBtn1 = () => {
        navigation.navigate('Login');
    }

    const handleBtn2 = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.body}>
            <View style={styles.img_wrapper}>
                <Image source={require('../assets/logo2.png')} style={styles.img} resizeMode='contain' />
                <Text style={styles.text}>Rides.Payments.Lifestyle</Text>
            </View>
            <View style={styles.btn_wrapper}>
                <View style={{ flex: 1,  marginRight: 8 }}>
                    <Btn1 handleBtn1={handleBtn1} title='Login' />
                </View>
                <View style={{ flex: 1 }}>
                    <Btn2 handleBtn2={handleBtn2} title='Register' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#211E8A',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 35,
    },
    img_wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 220,
        height: 100
    },
    text: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10,
    },
    btn_wrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
})

export default Index