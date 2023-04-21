
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DefaultDisplay = () => {
    return (
        <View style={{justifyContent: "center", alignItems: 'center'}}>
            <View style={styles.rectangle}>
                <View style={styles.block}></View>
                <View style={[styles.block, { width: '70%' }]}></View>
                <View style={styles.round}>
                    <Image source={require('../assets/curve2.png')} style={styles.curve} resizeMode='contain' />
                </View>
            </View>
            <Text style={{fontSize: 18, color: '#000', textAlign: 'center'}}>Nothing to show yet</Text>
            <Text style={{fontSize: 9, color: '#555', textAlign: 'center'}}>When you get pre-schedule for ride you'll see them here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: 140,
        height: 140,
        backgroundColor: '#d6e0f5',
        borderRadius: 20,
        padding: 15,
        marginBottom: 30,
    },
    block: {
        // paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#9fbfdf',
        borderRadius: 20,
        marginBottom: 10,
        width: '100%',
    },
    round: {
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: '#668cff',
        position: "absolute",
        bottom: -15,
        left: -15,
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    curve: {
        width: 40,
        height: 40,
    }
})

export default DefaultDisplay