import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { text, theme } from '../styles';
import { useNavigation } from '@react-navigation/native';


interface ProductProps {
     id: Number;
     name: String;
     img_URL: String;
     price: Number;
}

const ProductCard = ({ id, name, img_URL, price }: ProductProps) => {

     const navigation = useNavigation();

     return (
          <TouchableOpacity style={theme.productCard} onPress={() => navigation.navigate("ProductDetails", { id })}>
               <Image source={{ uri: img_URL }} style={theme.productImg} />
               <View style={theme.productDescription}>
                    <Text style={text.productName}>{name}</Text>
                    <View style={theme.priceContainer}>
                         <Text style={text.currency}>R$</Text>
                         <Text style={text.productPrice}>{price}</Text>
                    </View>
               </View>
          </TouchableOpacity>

     );
}

export default ProductCard;