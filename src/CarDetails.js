
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { BBtn, Btn2 } from "../Componet/Btn";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Dropdown } from 'react-native-element-dropdown';

const CarBrand = [
    { index: '1', label: 'Toyota' }
]
const CarColor = [
    { index: '1', label: 'Black' }
]
const CarModel = [
    { index: '1', label: 'GMT' }
]
const CarYear = [
    { index: '1', label: '2022' }
]
const CarCapacity = [
    { index: '1', label: '240 Hp' }
]

const CarDetails = ({ navigation }) => {


    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        navigation.navigate('PaymentDetails')
    }

    const handlePicker = () => {
        const options = {
            includeBase64: true
        }
        launchImageLibrary(options, response => {
            console.log(response);
        })
    }

    return (
        <ScrollView>
            <View style={[styles.model_wrapper]}>
                <BBtn handleBack={() => navigation.navigate('PersonalDetails')} />
                <Text style={[styles.text, { marginBottom: 15 }]}>One more thing </Text>
                <View>

                    {/* <TextInput style={[styles.input, { marginBottom: 30 }]} placeholder={`Driver's License`} /> */}
                    <View style={styles.picker}>
                        <Text style={styles.picker_text}>Driver License</Text>
                        <Pressable style={styles.picker_btn} onPress={handlePicker}>
                            <Text>Upload Image</Text>
                        </Pressable>
                    </View>


                    <Text style={{ fontSize: 17, color: '#000', marginBottom: 23, marginTop: 15, }}>Car Details</Text>
                    <View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                fontFamily="RobotoCondensed-Regular"
                                data={CarBrand}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="index"
                                placeholder={!isFocus ? 'Car Brand' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                fontFamily="RobotoCondensed-Regular"
                                data={CarColor}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="index"
                                placeholder={!isFocus ? 'Car Color' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1.5, marginRight: 10 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                fontFamily="RobotoCondensed-Regular"
                                data={CarModel}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="index"
                                placeholder={!isFocus ? 'Car Brand' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                fontFamily="RobotoCondensed-Regular"
                                data={CarYear}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="index"
                                placeholder={!isFocus ? 'Year' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                fontFamily="RobotoCondensed-Regular"
                                data={CarCapacity}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="index"
                                placeholder={!isFocus ? 'Capacity' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <View style={{ flex: 1.2 }}>
                            <TextInput style={[styles.input,]} placeholder='License Plate' placeholderTextColor='rgb(174, 174, 174)' />

                        </View>
                    </View>
                    <TextInput style={[styles.input]} placeholder={`Owner's Full Name`} placeholderTextColor='rgb(174, 174, 174)' />
                    <View>
                        <Text style={{ fontSize: 17, color: '#000', marginBottom: 23, marginTop: 15, }}>Car Images</Text>
                        <View style={[styles.picker, styles.mb]}>
                            <Text style={styles.picker_text}>Car Image</Text>
                            <Pressable style={[styles.picker_btn]} onPress={handlePicker}>
                                <Text style={{ color: '#fff' }}>Upload Image</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.picker, styles.mb]}>
                            <Text style={styles.picker_text}>Car Image</Text>
                            <Pressable style={[styles.picker_btn]} onPress={handlePicker}>
                                <Text style={{ color: '#fff' }}>Upload Image</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.picker, styles.mb]}>
                            <Text style={styles.picker_text}>Car Image</Text>
                            <Pressable style={[styles.picker_btn]} onPress={handlePicker}>
                                <Text style={{ color: '#fff' }}>Upload Image</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.picker, styles.mb]}>
                            <Text style={styles.picker_text}>Car Image</Text>
                            <Pressable style={[styles.picker_btn]} onPress={handlePicker}>
                                <Text style={{ color: '#fff' }}>Upload Image</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.picker, styles.mb]}>
                            <Text style={styles.picker_text}>Car Image</Text>
                            <Pressable style={[styles.picker_btn]} onPress={handlePicker}>
                                <Text style={{ color: '#fff' }}>Upload Image</Text>
                            </Pressable>
                        </View>

                    </View>
                    <View style={{marginVertical: 20,}}>
                        <Btn2 title='Continue' handleBtn2={handleClick} />
                    </View>
                </View>
            </View>
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
    mb: {
        marginBottom: 10,
    },
    model_wrapper: {
        flex: 1,
        padding: 30,
        paddingBottom: 40,
        backgroundColor: '#FAFAFA',
    },
    picker: {
        padding: 6,
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#0E0E240D',
    },
    picker_btn: {
        // borderWidth: 1.5,
        // borderColor: 'rgb(174, 174, 174)',
        borderRadius: 5,
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 14,
        paddingRight: 14,
        marginLeft: 'auto',
        backgroundColor: '#211E8A',
    },
    picker_text: {
        fontSize: 17,
        color: 'rgb(174, 174, 174)'
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
})

export default CarDetails