import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import AppIcon from "./AppIcon";
import {colors} from "../config/colors";

function AppTextInput({
  placeholder,
  width = "100%",
  iconType,
  iconSize = 30,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      <AppIcon
        name={iconType}
        size={iconSize}
        backgroundColor={colors.primary}
        color={colors.seccondary}
      />
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    borderColor:colors.lightGray,
    borderWidth:1,
    borderRadius:3,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    flex: 1,
  },
});

export default AppTextInput;
