
import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const days = [
    { index: '1', label: 'Daily' },
    { index: '2', label: 'Weekly' },
    { index: '3', label: 'Monthly' },
    { index: '4', label: 'Yearly' }
]

const Dashboard = ({navigation}) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);



    return (
        <ScrollView style={styles.body}>
            <View style={styles.head_wrapper}>
                <View style={{ flex: 1.5 }}><Text style={[styles.color, { fontSize: 20 }]}>Dashboard</Text></View>
                <View style={{ flex: 1 }}>
                    <Dropdown
                        style={[styles.dropdown, { marginRight: 10 }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        fontFamily="RobotoCondensed-Regular"
                        data={days}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="index"
                        placeholder={!isFocus ? 'Daily' : 'Daily'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', position: "relative", marginBottom: 40, }}>
                <Pressable style={[styles.arrow, {}]} hitSlop={{right: 10, left: 10, top: 10, bottom: 10}}><FontAwesome5 name='angle-left' size={20} color='#000' /></Pressable>
                <View>
                    <Text style={[styles.color, { textAlign: 'center', fontSize: 10 }]}>ALL TIME EARNING (NGN) </Text>
                    <Text style={[styles.color, { textAlign: 'center', fontSize: 45 }]}>459,940</Text>
                </View>
                <Pressable style={[styles.arrow, {right: 0}]} hitSlop={{right: 10, left: 10, top: 10, bottom: 10}}><FontAwesome5 name='angle-right' size={20} color='#000' /></Pressable>
            </View>
            <View style={styles.card}>
                <Text style={styles.date}>Monday, 21 June</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, marginTop: 30 }}>
                    <View>
                        <Text style={styles.white}>Earning</Text>
                        <Text style={{ fontSize: 20, color: '#fff' }}>131,750 <Text style={{ fontSize: 11 }}>NGN</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.white}>Tips</Text>
                        <Text style={{ fontSize: 20, color: '#fff' }}>46</Text>
                    </View>
                    <View>
                        <Text style={styles.white}>Avg. Rating</Text>
                        <Text style={{ fontSize: 20, color: '#fff' }}>4.5</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card, { paddingBottom: 8 }]}>
                <Text style={[styles.white, { fontSize: 10 }]}>Enjoy More Rides</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, marginTop: 6, alignItems: "flex-end" }}>
                    <View>
                        <Text style={{ fontSize: 22, color: '#BAB5FF', fontWeight: 'bold' }}>Get Your</Text>
                        <Text style={{ fontSize: 22, color: '#BAB5FF', fontWeight: 'bold' }}>Wynk Pass</Text>
                    </View>
                    <View>
                        <Pressable style={styles.round_btn} onPress={() => navigation.navigate('Profile', { screen: 'WynkPass'}) }>
                            <Text style={{ color: '#000', fontSize: 10, }}>Purchase Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
    head_wrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    dropdown: {
       
        fontFamily: 'RobotoCondensed-Regular',
        borderColor: '#000',
        borderWidth: 1.5,
        borderRadius: 50,
        paddingHorizontal: 12,
        color: '#000'
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#000',
    },
    placeholderStyle: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 18,
        // color: 'rgb(174, 174, 174)5'
        color: '#000',
    },
    arrow: {
        // position: "absolute",

    },
    card: {
        padding: 17,
        backgroundColor: '#0B0A26',
        borderRadius: 10,
        marginBottom: 20,
    },
    date: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000',
        alignSelf: 'flex-start',
        fontSize: 10,
        // width: 50,
    },
    color: {
        color: '#000',
    },
    white: {
        color: '#fff'
    },
    round_btn: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#fff'
    },
})

export default Dashboard