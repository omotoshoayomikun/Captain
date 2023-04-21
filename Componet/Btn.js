
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

////////////////////////////// BUTTON 1
export const Btn1 = ({ handleBtn1, title }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '' : '#fff' },
                styles.btn,
            ]}
            onPress={handleBtn1}
        >
            <Text style={[{ color: '#211E8A' }, styles.text]}>{title}</Text>
        </Pressable>
    )
}
//////////////////////////////////// BUTTON 2
export const Btn2 = ({ handleBtn2, title }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '' : '#211E8A' },
                styles.btn,
                styles.btn2,
            ]}
            onPress={handleBtn2}
        >
            <Text style={[{ color: '#fff' }, styles.text]}>{title}</Text>
        </Pressable>
    )
}

////////////////////////////// BACK BUTTON
export const BBtn = ({ handleBack }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#fff' : '#fff' },
                styles.bbtn
            ]}
            onPress={handleBack}
        >
            <FontAwesome5 name={'angle-left'} color='#fff' size={25} />
        </Pressable>
    )
}

/////////////////////////////////// ROUND BUTTON
export const RoundButton = ({ title, handleRound }) => {
    return (
        <Pressable style={styles.round_btn} onPress={handleRound}>
            <Text style={{color: '#000'}}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    btn: {
        padding: 12,
        borderRadius: 5,
        color: '#211E8A',
        borderColor: '#211E8A',
        borderWidth: 1,
    },
    btn2: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        color: '#fff',
        borderColor: '#fff',
    },
    text: {
        fontSize: 17,
        textAlign: "center",
    },
    bbtn: {
        backgroundColor: '#211E8A',
        width: 45,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    round_btn: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 8,
        paddingBottom: 8,

    },
})