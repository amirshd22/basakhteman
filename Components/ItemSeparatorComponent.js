import React from "react";
import { View, StyleSheet } from "react-native";
import {colors} from "../config/colors";

function ItemSeparator({ style }) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    position: "relative",
    left: "16%",
    bottom: 8,
    width: 250,
    height: 1,
    backgroundColor: colors.lightGray,
    opacity: 0.5,
  },
});

export default ItemSeparator;
