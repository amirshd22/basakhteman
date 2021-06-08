import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {colors} from "../config/colors";
import AppIcon from "./AppIcon";
import AppModel from "./AppModel";

function AppPicker({
  placeholder,
  width = "100%",
  items,
  onSelectItem,
  selectedItem,
}) {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setShowModel(true)}>
        <View style={[styles.container, { width }]}>
          <AppIcon
            name="apps"
            color={colors.seccondary}
            backgroundColor={colors.primary}
          />
          <TextInput
            style={styles.textInput}
            defaultValue={selectedItem ? selectedItem : placeholder}
            editable={false}
          />
          <AppIcon
            name="chevron-up"
            color={colors.seccondary}
            backgroundColor={colors.primary}
          />
        </View>
      </TouchableOpacity>
      <AppModel
        items={items}
        visible={showModel}
        handleClose={() => setShowModel(false)}
        handleSelect={onSelectItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 3,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    borderColor:colors.lightGray,
    borderWidth:1
  },
  textInput: {
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
});

export default AppPicker;
