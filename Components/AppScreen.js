import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { colors } from '../config/colors';
import Constants from "expo-constants"
export default function AppScreen({children, style}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={style} >{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.primary,
      paddingTop: Constants.statusBarHeight,
      flex: 1,
    },
  });