import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { text, theme } from "../styles";
import { Product } from "../types/Product";
import { makeRequest } from "../utils/request";
import arrow from "../assets/Seta.png";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ route: { params: { id } } }) => {
     const navigate = useNavigation();
     const [product, setProduct] = useState<Product>();
     const [isLoading, setIsLoading] = useState(false);

     async function getProduct() {
          setIsLoading(true);
          await makeRequest({ url: `/products/${id}` })
               .then(response => setProduct(response.data))
               .finally(() => setIsLoading(false));
     }

     useEffect(() => {
          getProduct();
     }, [id]);

     return (
          <View style={theme.container}>
               {isLoading ? <ActivityIndicator size="large" /> :
                    (
                         <View style={theme.cardDetail}>
                              <TouchableOpacity style={theme.backContainer} onPress={() => { navigate.goBack() }}>
                                   <Image source={arrow} style={theme.leftArrow} />
                                   <Text style={text.backDetails}>VOLTAR</Text>
                              </TouchableOpacity>
                              <View style={theme.productImgContainer}>
                                   <Image source={{ uri: product?.img_URL }} style={theme.productImgDetail} />
                              </View>
                              <View >
                                   <Text style={text.productNameDetails}>{product?.name}</Text>
                                   <View style={theme.priceContainer}>
                                        <Text style={text.currency}>R$</Text>
                                        <Text style={text.productPrice}>{product?.price}</Text>
                                   </View>
                              </View>
                              <ScrollView>
                                   <Text style={theme.productDescriptionDetail}>
                                        {product?.description}
                                   </Text>
                              </ScrollView>
                         </View>
                    )
               }
          </View>
     )

}

export default ProductDetails;