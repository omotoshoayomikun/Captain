
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Wallet = () => {

    const transHistory = [
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
        {
            transac: 'Wallet Topup',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '+NGN 500'
        },
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
        {
            transac: 'Airtime Recharge',
            date: 'Apr 3, 2021 11:33 AM',
            amount: '-NGN 500'
        },
    ]

    const genrateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
        return `#${randomColor}`
    }


    // useEffect(() => {
    //     setTimeout(() => {
           
    //         genrateColor()
    //     }, 100)
    // }, [])


    return (
        <ScrollView style={styles.body}>
            <View style={styles.head_wrapper}>
                <View><Text style={[styles.black, { fontSize: 20 }]}>My Wallet</Text></View>
            </View>
            <View style={[styles.card, { paddingBottom: 8 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, marginTop: 6 }}>
                    <View>
                        <Text style={{ fontSize: 15, color: '#555555' }}>Balance</Text>
                        <Text style={{ fontSize: 22, color: '#ffff', fontWeight: 'bold' }}>NGN 15,000</Text>
                    </View>
                    <View>
                        <Pressable style={styles.round_btn}>
                            <Text style={{ color: '#000', fontSize: 10, }}>+ Topup</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.header}>Recents Transfers</Text>
                <ScrollView style={styles.holder} horizontal={true}>
                    <View>
                        <View style={styles.wrapper}>
                            <Image source={require('../assets/female_user.png')} style={styles.img} resizeMode='cover' />
                        </View>
                        <Text style={{ color: '#000', fontSize: 13, textAlign: 'center', marginTop: 7 }}>Amila</Text>
                    </View>
                    <View>
                        <View style={styles.wrapper}>
                            <FontAwesome5 name="plus" color='#707070' size={20} />
                        </View>
                    </View>

                </ScrollView>
            </View>
            <View style={{marginBottom: 30}}>
                <Text style={[styles.header, { marginTop: 40 }]}>Transcation History</Text>
                {transHistory.map((trans, i) => (
                    <View style={styles.sub} key={i}>
                        <View style={{ width: 10, height: 10, backgroundColor: genrateColor(), borderRadius: 3, marginTop: 5 }}></View>
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 14, color: '#000', marginBottom: 5, }}> {trans.transac} </Text>
                            <Text style={{ fontSize: 13, color: '#000' }}>{trans.date}</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}><Text style={{ fontSize: 13, color: '#D40D12' }}> {trans.amount} </Text></View>
                    </View>
                ))}
            </View>
            <View style={{marginBottom: 30}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FAFAFA',
        padding: 30,
        paddingBottom: 0,
    },
    head_wrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    black: {
        color: '#000',
    },
    white: {
        color: '#fff'
    },
    card: {
        padding: 17,
        backgroundColor: '#0B0A26',
        borderRadius: 10,
        marginBottom: 20,
    },
    round_btn: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff'
    },
    holder: {
        flexDirection: 'row',
    },
    img: {
        width: 78,
        height: 78,
    },
    wrapper: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    sub: {
        flexDirection: 'row',
        padding: 15,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#5555'
    }
})

export default Wallet