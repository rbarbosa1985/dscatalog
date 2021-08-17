import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { nav } from "../styles";

const HeaderText = () => {
     const navigation = useNavigation();
     return (
          <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
               <Text style={nav.leftText}>DS Catalog</Text>
          </TouchableOpacity>
     )
};

export default HeaderText;