import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../config/colors';


export default function Agahi({title, tag, date}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>{tag}</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.details}>{date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"95%",
        alignSelf: "center",
        padding:10,
        borderRadius:3,
        backgroundColor: colors.primary, 
        marginTop:10,
    },
    title:{
        textAlign:"right",
        fontSize:16,
        color: colors.seccondary
    },
    tagContainer: {
        marginVertical:10,
    },
    tag:{
        textAlign:"right",
        color: colors.lightGray

    },
    details:{
        textAlign:"right",
        color: colors.lightGray,
        marginVertical:2,
    }

})
