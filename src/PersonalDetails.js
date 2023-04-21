
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { BBtn, Btn2 } from "../Componet/Btn";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { index: '1', label: 'Male' },
    { index: '2', label: 'Female' },
    { index: '3', label: 'Others' },
];

const PersonalDetails = ({ navigation }) => {


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const handleClick = () => {
        navigation.navigate('CarDetails')
    }

    return (
        <ScrollView style={styles.model_wrapper}  contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: "column" }} >
            <BBtn handleBack={() => navigation.navigate('Register')} />
            <Text style={[styles.text, { marginBottom: 15 }]}>Almost there... </Text>
            <View style={styles.flex}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={[styles.input, { flex: 1, marginRight: 10 }]} placeholder='First Name'  placeholderTextColor='rgb(174, 174, 174)' />
                    <TextInput style={[styles.input, { flex: 1 }]} placeholder='Last Name'  placeholderTextColor='rgb(174, 174, 174)' />
                </View>
                <TextInput style={styles.input} placeholder='Email'  placeholderTextColor='rgb(174, 174, 174)' />
                <View style={{ flexDirection: "row" }}>
                    <Dropdown
                        style={[styles.dropdown, { flex: 1, marginRight: 10 }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        
                        containerStyle={styles.containerStyle}
                        iconColor={styles.iconColor}
                        fontFamily="RobotoCondensed-Regular"
                        data={data}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="index"
                        placeholder={!isFocus ? 'Gender' : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            // setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <TextInput style={[styles.input, { flex: 1.5 }]} placeholder='Phone Number'  placeholderTextColor='rgb(174, 174, 174)' />
                </View>
                <TextInput style={styles.input} placeholder='Permanent Address'  placeholderTextColor='rgb(174, 174, 174)' />
                <TextInput style={styles.input} placeholder='Referral Code'  placeholderTextColor='rgb(174, 174, 174)' />
            </View>
            <Btn2 title='Continue' handleBtn2={handleClick} />
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
        color: 'rgb(174, 174, 174)'
    },
})

export default PersonalDetails