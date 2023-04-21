import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Modal, ScrollView, Image } from "react-native";
import { BBtn, Btn1, Btn2 } from "../Componet/Btn";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { index: '1', label: 'Basics'},
    { index: '2', label: 'Meduim'},
    { index: '3', label: 'Premium'},
];
const id_type = [
    { index: '1', label: 'Voters card'},
    { index: '2', label: 'NIN'},
    { index: '3', label: 'Premium'},
];

const Register = ({ navigation }) => {


    const handleClick = () => {
        navigation.navigate('PersonalDetails');
    }

    const handleBack = () => {
        navigation.navigate('Index')
    }

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    return (
        <ScrollView style={styles.body} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', flexDirection: "column"}}>
            <BBtn handleBack={handleBack} />
            <Text style={styles.text}>Let's get </Text>
            <Text style={[{ marginBottom: 40 }, styles.text]}>you started </Text>
            <View style={styles.flex}>
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    containerStyle={styles.containerStyle}
                    iconStyle={styles.iconStyle}
                    fontFamily="RobotoCondensed-Regular"
                    data={data}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="index"
                    placeholder={!isFocus ? 'Captain Type' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setIsFocus(false);
                    }}
                />
                <Text style={{ marginTop: 30, color: '#000', fontSize: 15, marginBottom: 10 }}>Identity Verification</Text>
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    fontFamily="RobotoCondensed-Regular"
                    data={id_type}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="index"
                    placeholder={!isFocus ? 'ID Type' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        // setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <TextInput style={styles.input} placeholder='ID Number' placeholderTextColor='rgb(174, 174, 174)' />
            </View>
            <View>
                <Btn2 title='Continue' handleBtn2={ handleClick} />
                <Text style={{ textAlign: 'center', marginTop: 30, color: '#000' }}>Already a user?
                    <Text style={{ color: '#211E8A' }} onPress={() => {
                        navigation.navigate('Login')
                    }}> Login</Text>
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
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
    pass: {
        color: '#211E8A',
        textAlign: 'right',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 15,
    },
    flex: {
        flex: 1,
    },
    model_wrapper: {
        flex: 1,
        padding: 30,
        paddingBottom: 40
    },
    dropdown: {
        paddingLeft: 25,
        paddingTop: 5.5,
        paddingBottom: 5.5,
        fontSize: 18,
        // height: 50,
        fontFamily: 'RobotoCondensed-Regular',
        borderColor: '#0E0E241A',
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom: 15,
        backgroundColor: '#0E0E240D',
        color: '#000'
    },
    selectedTextStyle: {
        fontSize: 18,
        color: '#211E8A',
        fontFamily: 'RobotoCondensed-Regular',
    },
    placeholderStyle: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 18,
        color: 'rgb(174, 174, 174)'
    },
    inputSearchStyle: {
        color: '#000'
    },
    containerStyle: {
        color: '#000'
    }
})

export default Register