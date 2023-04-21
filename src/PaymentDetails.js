
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Modal, Image, Pressable, ScrollView } from "react-native";
import { BBtn, Btn2 } from "../Componet/Btn";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-element-dropdown';

const payment = [
    { index: '1', label: 'Master Card' }
]

const PaymentDetails = ({ navigation }) => {

    const [model, setModel] = useState(false)

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const handleClick = () => {
        setModel(true)
    }

    return (
        <ScrollView style={styles.model_wrapper}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: 45 }}>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#fff' : '#fff' },
                        styles.bbtn
                    ]}
                    onPress={() => navigation.navigate('CarDetails')}
                >
                    <FontAwesome5 name={'angle-left'} color='#fff' size={25} />
                </Pressable>
                <Text style={{ fontSize: 17, color: '#000', marginBottom: 15, fontWeight: '500' }} onPress={handleClick}>Skip</Text>
            </View>
            <Text style={[styles.text, { marginBottom: 15 }]}>Payment Details </Text>
            <View style={styles.flex}>
                {/* <View> */}
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    fontFamily="RobotoCondensed-Regular"
                    data={payment}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="index"
                    placeholder={!isFocus ? 'Payment Method' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        //setValue(item.value);
                        // console.log(item)
                        // console.log(item.value)
                        setIsFocus(false);
                    }}
                />
                {/* </View> */}
                <TextInput style={styles.input} placeholder={`Driver's License`}  placeholderTextColor='rgb(174, 174, 174)' />
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={[styles.input, { flex: 2, marginRight: 10 }]} placeholder='Card Number'  placeholderTextColor='rgb(174, 174, 174)' />
                    <TextInput style={[styles.input, { flex: 1 }]} placeholder='CVV'  placeholderTextColor='rgb(174, 174, 174)' />
                </View>
            </View>
            <Btn2 title='Finish Setup' handleBtn2={handleClick} />
            {/* THIS MODEL IS FOR THE SUCCESS MESSAGE */}
            <Modal
                visible={model}
                onRequestClose={() => navigation.navigate('Login')}
            >
                <View style={styles.model_wrapper}>
                    <View style={[styles.flex, { justifyContent: "center", alignItems: 'center' }]}>
                        <Image source={require('../assets/check_icon.png')} style={styles.img} />
                        <Text style={styles.succText}>Congratulation!</Text>
                        <Text style={styles.succText}>Your Wynk account has been created successfully</Text>
                    </View>
                    <View style={{ marginTop: 150 }}>
                        <Btn2 title='Take me to login' handleBtn2={() => {
                            navigation.navigate('Login')
                            setModel(false);
                        }} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#000',
        lineHeight: 40,
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
    flex: {
        flex: 1,
    },
    model_wrapper: {
        flex: 1,
        padding: 30,
        paddingBottom: 40,
        backgroundColor: '#FAFAFA',
    },
    img: {
        marginBottom: 30,
    },
    succText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
    },
    bbtn: {
        backgroundColor: '#211E8A',
        width: 45,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        paddingLeft: 25,
        paddingTop: 5.5,
        paddingBottom: 5.5,
        fontSize: 18,
        // height: 50,
        fontFamily: 'RobotoCondensed-Regular',
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom: 15,
        borderColor: '#0E0E241A',
        backgroundColor: '#0E0E240D',
    },
    selectedTextStyle: {
        fontSize: 18,
        fontFamily: 'RobotoCondensed-Regular',
        color: '#211E8A',
    },
    placeholderStyle: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 18,
        color: 'rgb(174, 174, 174)5'
    },
})

export default PaymentDetails