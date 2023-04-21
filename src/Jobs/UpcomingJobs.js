
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DefaultDisplay from "../../Componet/DefaultDisplay";

const UpcomingJobs = ({ navigation }) => {
    return (
        <ScrollView style={styles.body} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', flexDirection: "column" }}>
            <View style={styles.content_body}>
                <DefaultDisplay />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FAFAFA',
        marginTop: 111,
    },
    content_body: {
        padding: 30,
        alignItems: "center",
    },
})

export default UpcomingJobs