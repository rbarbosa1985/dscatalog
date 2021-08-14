import React, { useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { ProductCard, SearchInput } from '../components';
import { theme } from '../styles';
import { useState } from 'react';
import { ProductResponse } from '../types/Product';
import { makeRequest } from '../utils/request';

const Catalog = () => {
     const [search, setSearch] = useState("");
     const [products, setProducts] = useState<ProductResponse>();
     const [loading, setLoading] = useState(false);

     async function getProducts() {
          const params = {
               page: 0,
               linesPerPage: 12,
          }
          setLoading(true);
          await makeRequest({ url: '/products', params }).then(response => setProducts(response.data))
               .finally(() => setLoading(false));
     }

     useEffect(() => {
          getProducts()
     }, [])


     const data = search.length > 0 ? products?.content.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())) : products?.content;

     return (
          <ScrollView contentContainerStyle={theme.scrollContainer}>
               <SearchInput placeholder={"Nome do produto"} search={search} setSearch={setSearch} />
               {
                    loading ? (<ActivityIndicator size="large" />) : (data?.map((product) => (<ProductCard {...product} key={product.id} />)))
               }
          </ScrollView>
     )
};

export default Catalog;